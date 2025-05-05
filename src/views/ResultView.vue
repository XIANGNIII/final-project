<template>
  <div class="result-container">
      <div class="result-card">
          <div class="result-header">
              <h1>{{ t('Your Result') }}</h1>
              <router-link to="/home" class="home-link">{{ t('Back To Home') }}</router-link>
          </div>

          <div v-if="loading" class="loading">
              <p>{{ t('loading') }}</p>
          </div>

          <div v-else-if="error" class="error">
              <p>{{ error }}</p>
              <router-link to="/home">{{ t('Back To Home') }}</router-link>
          </div>

          <div v-else-if="result" class="result-content">
              <div class="result-info">
                  <h2>{{ result.characterInfo.name }}</h2>

                  <div class="character-image">
                      <img :src="getCharacterImage(result.resultType)" :alt="result.characterInfo.name" v-if="getCharacterImage(result.resultType)">
                      <div v-else class="image-placeholder">?</div>
                  </div>

                  <div class="result-description">
                      <p>{{ result.characterInfo.description }}</p>
                  </div>
              </div>

              <div class="score-breakdown">
                  <h3>{{ t('Personality Breakdown') }}</h3>

                  <div class="score-bars">
                      <div v-for="(score, type) in result.scores" :key="type" class="score-bar-item">
                           <div class="score-label">{{ t(type) || type }}</div>
                          <div class="score-bar-container">
                              <div class="score-bar" :style="{ width: `${calculateScoreWidth(score)}%` }"></div>
                          </div>
                          <div class="score-value">{{ score ?? 0 }}</div>
                      </div>
                  </div>

                  <div class="result-actions" v-if="isOwnResult">
                  <button @click="startNewQuiz" class="action-button">{{ t('takeQuizAgain') }}</button>
                  <button @click="shareResult" class="action-button share-button">{{ t('shareResult') }}</button>
              </div>
              </div>
          </div>
          <div v-else class="error">
              <p>{{ t('errorLoadingResult') }}</p>
              <router-link to="/home">{{ t('backToHome') }}</router-link>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../firebase'
import { characterTypes } from '../utils/quizData'
import { t } from '../utils/i18n'

const router = useRouter();
const route = useRoute();

const result = ref(null);
const loading = ref(true);
const error = ref(null);
const currentUserUid = ref(null);

const isOwnResult = computed(() => {
return currentUserUid.value && result.value?.ownerUid && currentUserUid.value === result.value.ownerUid;
});

const recordResultView = async (ownerUid, viewerUsername, resultId) => {
if (!ownerUid || !viewerUsername || !resultId) return;
try {
  const notificationsRef = collection(db, "notifications");
  await addDoc(notificationsRef, {
    recipientUid: ownerUid,
    viewerUsername: viewerUsername,
    resultId: resultId,
    timestamp: serverTimestamp(),
    read: false
  });
} catch (viewError) {
}
};

const getCharacterImage = (type) => {
if (!type) return '';
try {
  return new URL(`../assets/characters/${type}.png`, import.meta.url).href
} catch (e) {
  return ''
}
}

const calculateScoreWidth = (score) => {
  const numericScore = Number(score) || 0;
  const percentage = Math.max(numericScore * 20, 2);
  return Math.min(percentage, 100);
};

const startNewQuiz = () => {
  router.push('/quiz/1')
}

const copyToClipboard = (text) => {
navigator.clipboard.writeText(text)
  .then(() => {
    alert(t('linkCopied') || 'Link copied to clipboard!')
  })
  .catch(err => {
    alert(t('copyFailed') || 'Failed to copy link.')
  })
}

const shareResult = async () => {
  if (!result.value || !result.value.characterInfo) return;

  const shareData = {
      title: t('shareTitle') || 'My Quiz Result!',
      text: t('shareText', { characterType: result.value.characterInfo.name }) || `I got ${result.value.characterInfo.name} on the quiz!`,
      url: window.location.href
  };

  if (navigator.share) {
      try {
          await navigator.share(shareData);
      } catch (err) {
          if (err.name !== 'AbortError') {
               copyToClipboard(shareData.url);
          }
      }
  } else {
      copyToClipboard(shareData.url);
  }
}

onMounted(async () => {
const resultId = route.params.resultId;

if (!resultId || resultId === 'undefined' || resultId === 'null') {
  error.value = t('invalidResultId') || 'Invalid Result ID';
  loading.value = false;
  return;
}

loading.value = true;
error.value = null;

try {
  const resultRef = doc(db, 'results', resultId);
  const resultDoc = await getDoc(resultRef);

  if (!resultDoc.exists()) {
    error.value = t('resultNotFound') || 'Result data not found.';
    loading.value = false;
    return;
  }

  const resultData = resultDoc.data();
  const resultType = resultData.resultType;
  const ownerUid = resultData.uid;

  if (!ownerUid) {
    error.value = t('errorLoadingResult') || 'Result owner information is missing.';
    loading.value = false;
    return;
  }
  
  if (!resultType || !characterTypes[resultType]) {
    error.value = t('errorLoadingResult') || 'Could not load result details.';
    loading.value = false;
    return;
  }

  const currentUser = auth.currentUser;
  currentUserUid.value = currentUser ? currentUser.uid : null;

  result.value = {
    id: resultId,
    resultType: resultType,
    characterInfo: characterTypes[resultType],
    scores: resultData.scores || {},
    createdAt: resultData.createdAt?.toDate ? resultData.createdAt.toDate() : new Date(),
    ownerUid: ownerUid
  };

  if (currentUser && ownerUid && currentUser.uid !== ownerUid) {
      const viewerDocRef = doc(db, 'usersList', currentUser.uid);
      const viewerDocSnap = await getDoc(viewerDocRef);
      if (viewerDocSnap.exists()) {
          const viewerUsername = viewerDocSnap.data().username;
          await recordResultView(ownerUid, viewerUsername, resultId);
      } else {
          await recordResultView(ownerUid, `User (${currentUser.uid.substring(0,5)})`, resultId);
      }
  }

} catch (err) {
  error.value = t('errorLoadingResult') || 'An error occurred.';
} finally {
  loading.value = false;
}
});
</script>

<style scoped>
.result-container {
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
padding: 20px;
background-color: var(--background-color);
background-size: cover;
background-position: center;
font-family: 'Josefin Sans', sans-serif;
}

.result-card {
background-color: var(--card-color);
border-radius: 15px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
overflow: hidden;
max-width: 800px;
width: 100%;
}

.result-header {
padding: 20px 30px;
background-color: var(--card-color);
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid var(--color-border);
}

.result-header h1 {
font-family: 'Bebas Neue', sans-serif;
font-size: 2.2rem;
color: var(--text-primary);
margin: 0;
letter-spacing: 1.5px;
}

.home-link {
color: var(--primary-color);
text-decoration: none;
font-weight: bold;
transition: color 0.2s ease;
}
.home-link:hover {
  color: var(--primary-light);
}

.loading,
.error {
padding: 50px;
text-align: center;
color: var(--text-secondary);
}

.error p, .error {
color: var(--error-color);
}
.error a {
  color: var(--primary-color);
}

.result-content {
padding: 30px;
}

.result-info {
text-align: center;
margin-bottom: 30px;
}

.result-info h2 {
font-family: 'Bebas Neue', sans-serif;
font-size: 2.2rem;
color: var(--primary-color);
letter-spacing: 1px;
margin-bottom: 25px;
}

.character-image {
width: 180px;
height: 180px;
margin: 0 auto 25px;
border-radius: 50%;
overflow: hidden;
background-color: #e0e0e0;
display: flex;
justify-content: center;
align-items: center;
border: 5px solid var(--primary-light);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.character-image img {
width: 100%;
height: 100%;
object-fit: cover;
}
.image-placeholder {
font-size: 4rem;
color: var(--text-secondary);
}

.result-description {
max-width: 600px;
margin: 0 auto;
line-height: 1.7;
color: var(--text-secondary);
font-size: 1.05rem;
}

.score-breakdown {
margin-top: 45px;
padding-top: 25px;
border-top: 1px dashed var(--color-border);
}

.score-breakdown h3 {
margin-bottom: 25px;
text-align: center;
color: var(--text-primary);
font-size: 1.3rem;
font-weight: 600;
}

.score-bars {
display: flex;
flex-direction: column;
gap: 18px;
max-width: 500px;
margin: 0 auto;
}

.score-bar-item {
display: flex;
align-items: center;
gap: 15px;
}

.score-label {
width: 130px;
font-weight: 600;
text-align: right;
flex-shrink: 0;
font-size: 0.9rem;
color: var(--text-secondary);
}

.score-bar-container {
flex: 1;
height: 18px;
background-color: var(--background-color);
border-radius: 9px;
overflow: hidden;
}

.score-bar {
height: 100%;
background: linear-gradient(to right, var(--primary-light), var(--primary-color));
border-radius: 9px;
transition: width 0.8s ease-out;
}

.score-value {
width: 35px;
text-align: right;
font-weight: bold;
color: var(--primary-color);
flex-shrink: 0;
font-size: 0.9rem;
}

.result-actions {
margin-top: 45px;
display: flex;
justify-content: center;
gap: 20px;
}

.action-button {
padding: 10px 25px;
border-radius: 8px;
font-weight: bold;
border: none;
cursor: pointer;
transition: all 0.2s ease;
font-size: 0.9rem;
letter-spacing: 0.5px;
color: white;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.action-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
.action-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

.action-button:nth-child(1) {
background-color: var(--primary-color);
}
.action-button:nth-child(1):hover {
background-color: var(--primary-light);
}

.share-button {
background-color: var(--secondary-color);
}
.share-button:hover {
background-color: var(--secondary-light);
}
</style>