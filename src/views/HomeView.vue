<template>
  <div class="home-container">
    <div class="header">
      <h1>In the Night Garden Character Quiz</h1>
      <div class="user-info">
        <span>{{ t('welcome') }}, {{ currentUsername || 'User' }}</span>
        <button @click="handleLogout" class="logout-btn">{{ t('logout') }}</button>
      </div>
    </div>

    <div class="content">
      <div v-if="hasUnreadViews" class="notification-banner">
        <span><strong>{{ mostRecentViewerMasked }}</strong> {{ t('resultViewedTail') || 'viewed your result!' }}
            ({{ unreadNotifications.length }} new view{{ unreadNotifications.length > 1 ? 's' : '' }})</span>
        <button @click="dismissNotifications" class="dismiss-btn" :title="t('dismissNotification') || 'Dismiss'">
          &times;
        </button>
      </div>
      <div class="quiz-actions">
        <button @click="startNewQuiz" class="start-quiz-btn">{{ t('Start Quiz') }}</button>

        <div class="history-section" v-if="userResults.length > 0">
          <h2>{{ t('Test History') }}</h2>
          <div class="results-list">
            <div v-for="result in userResults" :key="result.id" class="result-item">
              <div class="result-info">
                <span class="result-type">{{ t(result.resultType) }}</span>
                <span class="result-date">{{ formatDate(result.createdAt) }}</span>
              </div>
              <button @click="viewResult(result.id)" class="view-btn">{{ t('viewResult') }}</button>
            </div>
          </div>
        </div>

        <div class="search-section">
          <h2>{{ t('Search Others') }}</h2>
          <div class="search-box">
            <input
              type="text"
              v-model="searchUsername"
              :placeholder="t('Enter Username (e.g. 7788)')"
              @keyup.enter="searchUserResults"
            />
            <button @click="searchUserResults">{{ t('search') }}</button>
          </div>
          <div v-if="searchResults.length > 0" class="search-results">
            <div class="result-item">
              <div class="result-info">
                <span class="result-username">{{ searchResults[0].username }}</span>
                <span class="result-type">{{ t(searchResults[0].resultType) }}</span>
                <span class="result-date">{{ formatDate(searchResults[0].createdAt) }}</span>
              </div>
              <div class="result-actions-buttons">
                <button @click="viewResult(searchResults[0].id)" class="view-btn">{{ t('View Result') }}</button>
                <button
                  @click="checkCompatibility(searchResults[0])"
                  class="compatibility-btn"
                  :disabled="!userResults.length"
                >
                  {{ t('Check Compatibility') || 'Check Compatibility' }}
                </button>
              </div>
            </div>
          </div>
          <div v-if="searchPerformed && searchResults.length === 0" class="no-results">
            {{ t('No Results') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, getDocs, doc, setDoc, orderBy, limit, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { t } from '../utils/i18n'
import { calculateCompatibilityScore, getCompatibilityInterpretation } from '../utils/compatibilityService'

const router = useRouter()

const currentUsername = ref('')
const currentUserUid = ref(null)
const userResults = ref([])
const searchUsername = ref('')
const searchResults = ref([])
const searchPerformed = ref(false)
const unreadNotifications = ref([])
const hasUnreadViews = computed(() => unreadNotifications.value.length > 0)
const mostRecentViewerMasked = computed(() => {
  if (unreadNotifications.value.length > 0 && unreadNotifications.value[0]?.viewerUsername) {
    const viewer = unreadNotifications.value[0].viewerUsername;
    if (viewer && typeof viewer === 'string' && viewer.length > 0) {
      return viewer.charAt(0) + '***';
    }
  }
  return '';
});
let unsubscribeAuth = null;

const dismissNotifications = async () => {
  if (unreadNotifications.value.length === 0) return;
  const updatePromises = unreadNotifications.value.map(notification => {
    const notificationRef = doc(db, 'notifications', notification.id);
    return updateDoc(notificationRef, { read: true });
  });
  try {
    await Promise.all(updatePromises);
    unreadNotifications.value = [];
  } catch (error) {
    alert(t('errorDismissingNotifications') || 'Could not dismiss notifications.');
  }
};

const fetchUserResults = async (username) => {
  if (!username) {
    userResults.value = [];
    return;
  }
  try {
    const resultsRef = collection(db, 'results');
    const q = query(resultsRef, where('username', '==', username), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    userResults.value = results;
  } catch (error) {
    userResults.value = [];
  }
};

const searchUserResults = async () => {
  const trimmedSearch = searchUsername.value.trim();
  if (!trimmedSearch) return;

  searchPerformed.value = true;
  searchResults.value = [];

  try {
    const resultsRef = collection(db, 'results');
    const q = query(resultsRef, where('username', '==', trimmedSearch), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.resultType && data.username) {
        results.push({ id: doc.id, ...data });
      }
    });
    searchResults.value = results;
  } catch (error) {
    searchResults.value = [];
  }
};

const fetchUnreadNotifications = async (uid) => {
  if (!uid) {
    unreadNotifications.value = [];
    return;
  }
  try {
    const notificationsRef = collection(db, "notifications");
    const q = query(
      notificationsRef,
      where("recipientUid", "==", uid),
      where("read", "==", false),
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);

    const notifications = [];
    querySnapshot.forEach((doc) => {
      notifications.push({ id: doc.id, ...doc.data() });
    });
    unreadNotifications.value = notifications;
  } catch (error) {
    unreadNotifications.value = [];
  }
};

const startNewQuiz = () => { router.push('/quiz/1'); };
const viewResult = (resultId) => { router.push(`/result/${resultId}`); };

const checkCompatibility = (searchedUserResult) => {
  if (!currentUsername.value || userResults.value.length === 0) {
    alert(t('errorCurrentUserNoResults') || 'Cannot check compatibility. Your results are not available.');
    return;
  }
  const currentUserLatestResult = userResults.value[0];
  if (!currentUserLatestResult || !currentUserLatestResult.resultType) {
     alert(t('errorCurrentUserNoResults') || 'Your latest result is invalid.');
     return;
  }
  const currentUserType = currentUserLatestResult.resultType;

  if (!searchedUserResult || !searchedUserResult.resultType || !searchedUserResult.username) {
     alert(t('errorSearchedUserNoResults') || 'Searched user\'s result is invalid or missing username.');
     return;
  }
  const searchedUserType = searchedUserResult.resultType;
  const searchedUsername = searchedUserResult.username;

  let compatibilityScore = null;
  let interpretation = '';
  try {
      compatibilityScore = calculateCompatibilityScore(currentUserType, searchedUserType);
      interpretation = getCompatibilityInterpretation(compatibilityScore);
  } catch (calcError){
      alert("Error calculating compatibility.");
      return;
  }

  const routeParams = {
      userA: currentUsername.value,
      userB: searchedUsername,
      score: compatibilityScore !== null ? compatibilityScore : 0,
      interpretation: encodeURIComponent(interpretation || '')
  };

  try {
     router.push({
       name: 'compatibility',
       params: routeParams
     });
  } catch (navError) {
      alert("Failed to navigate to compatibility page.");
  }
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
  }
};

const formatDate = (timestamp) => {
  if (!timestamp?.toDate) return '';
  const date = timestamp.toDate();
  if (isNaN(date)) return '';
  return date.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true });
};

onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUserUid.value = user.uid;
      try {
        const userDocRef = doc(db, 'usersList', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          currentUsername.value = userData.username || 'Unknown User';
          await fetchUserResults(currentUsername.value);
          await fetchUnreadNotifications(currentUserUid.value);
        } else {
          currentUsername.value = 'Unknown User';
          userResults.value = [];
          await fetchUnreadNotifications(currentUserUid.value);
        }
      } catch (error) {
        currentUsername.value = 'Error Loading User';
        userResults.value = [];
        unreadNotifications.value = [];
      }
    } else {
      currentUsername.value = '';
      currentUserUid.value = null;
      userResults.value = [];
      searchResults.value = [];
      searchPerformed.value = false;
      unreadNotifications.value = [];
      router.push('/login');
    }
  });
});

onUnmounted(() => {
  if (unsubscribeAuth) {
    unsubscribeAuth();
  }
});
</script>

<style scoped>
.notification-banner {
  background-color: var(--secondary-light);
  color: var(--primary-color);
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  border: 1px solid var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-banner span {
  flex-grow: 1;
  text-align: center;
  margin-right: 10px;
}

.dismiss-btn {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  cursor: pointer;
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.2s;
}
.dismiss-btn:hover {
  opacity: 1;
}

.home-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Josefin Sans', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-border);
}

.header h1 {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--text-primary);
    font-size: 1.8rem;
    letter-spacing: 1px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--text-primary);
}

.logout-btn {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}
.logout-btn:hover {
  background-color: var(--secondary-light);
  color: var(--text-primary);
}

.content {
  background-color: var(--card-color);
  border-radius: 15px;
  padding: 25px 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.quiz-actions {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.start-quiz-btn {
  padding: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.start-quiz-btn:hover {
  background-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.history-section, .search-section {
  margin-top: 20px;
}
h2 {
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 8px;
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 600;
}

.search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-box input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.95rem;
}
.search-box input:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(147, 120, 120, 0.2);
}

.search-box button {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}
.search-box button:hover {
   background-color: var(--secondary-light);
   color: var(--text-primary);
}

.results-list, .search-results {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.result-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.result-type {
  font-weight: bold;
  color: var(--text-primary);
}

.result-date {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.result-username {
  color: var(--primary-color);
  font-weight: bold;
}

.result-actions-buttons {
  display: flex;
  gap: 8px;
}

.result-actions-buttons button {
    padding: 6px 12px;
    font-size: 0.85rem;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease, transform 0.1s ease;
}
.result-actions-buttons button:hover {
    transform: translateY(-1px);
}
.result-actions-buttons button:active {
    transform: translateY(0);
}

.view-btn {
  background-color: var(--secondary-color);
}
.view-btn:hover {
    background-color: var(--secondary-light);
    color: var(--text-primary);
}

.compatibility-btn {
  background-color: var(--primary-color);
}
.compatibility-btn:hover:not(:disabled) {
  background-color: var(--primary-light);
}

.compatibility-btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
  opacity: 0.7;
}

.no-results {
  text-align: center;
  padding: 20px;
  background-color: transparent;
  border-radius: 4px;
  color: var(--text-secondary);
  margin-top: 10px;
}
</style>