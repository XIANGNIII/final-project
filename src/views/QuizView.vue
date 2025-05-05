<template>
  <div :class="['quiz-container', `bg-${backgroundIndex}`]">
    <router-link to="/home" class="back-link">Back to home page</router-link>

    <div class="quiz-main-content">
      <p class="question-number-display">Question {{ currentQuestion.id }} / {{ questions.length }}</p>
      <h2 class="question-text">{{ currentQuestion.text }}</h2>
      <div class="options-container">
        <div
          v-for="option in currentQuestion.options"
          :key="option.id"
          :class="['option-item', { 'selected': selectedOption === option.id }]"
          @click="selectOption(option.id)"
        >
          <div class="option-label">{{ option.id }}</div>
          <div class="option-text">{{ option.text }}</div>
        </div>
      </div>
    </div>

    <div class="quiz-footer">
      <button
        @click="goToPrevious"
        class="nav-button previous"
        :disabled="questionNumber <= 1"
      >
        Previous
      </button>
      <button
        @click="goToNext"
        class="nav-button next"
        :disabled="!selectedOption"
      >
        {{ isLastQuestion ? 'See Results' : 'Next' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { questions } from '../utils/quizData'
import { calculateResult } from '../utils/quizResultService'
import { auth, db } from '../firebase'

const router = useRouter()
const route = useRoute()

const questionNumber = computed(() => parseInt(route.params.questionId) || 1)
const currentQuestion = computed(() => questions.find(q => q.id === questionNumber.value) || questions[0])
const isLastQuestion = computed(() => questionNumber.value === questions.length)
const selectedOption = ref(null)
const username = ref('')
const resultId = ref('')
const userAnswers = ref([])
let unsubscribeAuth = null;

const findAndSetUsername = async (uid) => {
  if (!uid) {
      username.value = 'Unknown User';
      return;
  }
  try {
      const userDocRef = doc(db, 'usersList', uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          username.value = userData.username || 'Unknown User';
      } else {
          username.value = 'Unknown User';
      }
  } catch (error) {
      username.value = 'Unknown User';
  }
};

const backgroundIndex = computed(() => {
  return ((questionNumber.value - 1) % 5) + 1;
});

const checkForExistingTest = async (uid) => {
try {
  const currentTestRef = doc(db, 'users', uid, 'currentTest', 'answers')
  const currentTestDoc = await getDoc(currentTestRef)

  if (currentTestDoc.exists()) {
    const testData = currentTestDoc.data()
    if (testData.answers && Array.isArray(testData.answers)) {
      userAnswers.value = testData.answers
      resultId.value = testData.resultId || uuidv4()
      const currentAnswer = userAnswers.value.find(
        a => parseInt(a.questionId, 10) === questionNumber.value
      )
      if (currentAnswer) {
        selectedOption.value = currentAnswer.option
      }
    } else {
      await createNewTest(uid)
    }
  } else {
    await createNewTest(uid)
  }
} catch (error) {
  await createNewTest(uid);
}
}

const createNewTest = async (uid) => {
 resultId.value = uuidv4()
 userAnswers.value = []
 selectedOption.value = null
 try {
   const currentTestRef = doc(db, 'users', uid, 'currentTest', 'answers')
   await setDoc(currentTestRef, {
     resultId: resultId.value,
     answers: [],
     startedAt: new Date()
   })
 } catch (error) {
 }
}

const selectOption = (optionId) => {
  selectedOption.value = optionId
}

const saveAnswer = async () => {
if (!selectedOption.value) return false
const currentUser = auth.currentUser
if (!currentUser) return false

try {
  const answerData = {
    questionId: questionNumber.value,
    option: selectedOption.value,
    weight: currentQuestion.value.weight || 1
  }

  const existingAnswerIndex = userAnswers.value.findIndex(
    a => parseInt(a.questionId, 10) === questionNumber.value
  )

  if (existingAnswerIndex >= 0) {
    userAnswers.value[existingAnswerIndex] = answerData
  } else {
    userAnswers.value.push(answerData)
  }

  const currentTestRef = doc(db, 'users', currentUser.uid, 'currentTest', 'answers')

  await setDoc(currentTestRef, {
      resultId: resultId.value || uuidv4(),
      answers: userAnswers.value,
  }, { merge: true });

  return true
} catch (error) {
  return false
}
}

const goToPrevious = () => {
if (questionNumber.value > 1) {
  router.push(`/quiz/${questionNumber.value - 1}`)
}
}

const goToNext = async () => {
if (!selectedOption.value) return;

const saved = await saveAnswer();
if (!saved) return;

if (isLastQuestion.value) {
  const currentUser = auth.currentUser;
  if (!currentUser) return;

  if (userAnswers.value.length === 0) {
    alert("Please answer the questions before submitting.");
    return;
  }

try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
         return;
    }

    const result = calculateResult(userAnswers.value);

    if (!resultId.value || resultId.value === "null" || resultId.value === "undefined") {
        resultId.value = uuidv4();
    }

    const resultRef = doc(db, 'results', resultId.value);

     if (!username.value) {
         await findAndSetUsername(currentUser.uid);
         if (!username.value) {
             alert("Error: Could not determine username to save result.");
             return;
         }
     }

    const resultData = {
        uid: currentUser.uid,
        username: username.value,
        answers: userAnswers.value,
        resultType: result.resultType,
        scores: result.scores,
        createdAt: new Date()
    };

    await setDoc(resultRef, resultData);

    const currentTestRef = doc(db, 'users', currentUser.uid, 'currentTest', 'answers');
    await setDoc(currentTestRef, { resultId: null, answers: [], startedAt: null });

    router.push(`/result/${resultId.value}`);

} catch (error) {
    alert("Error saving results. Please check console and try again.");
}
} else {
  router.push(`/quiz/${questionNumber.value + 1}`);
}
}

watch(() => questionNumber.value, (newVal, oldVal) => {
  if (newVal !== oldVal) {
      selectedOption.value = null;
      const currentAnswer = userAnswers.value.find(
          a => parseInt(a.questionId, 10) === newVal
      );
      if (currentAnswer) {
          selectedOption.value = currentAnswer.option;
      }
  }
}, { immediate: true });

onMounted(() => {
 unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
   if (user) {
     await findAndSetUsername(user.uid);
     await checkForExistingTest(user.uid);
   } else {
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
.quiz-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  font-family: 'Josefin Sans', sans-serif;
}

.bg-1 { background-image: url('@/assets/background/quiz-bg-1.png'); }
.bg-2 { background-image: url('@/assets/background/quiz-bg-2.png'); }
.bg-3 { background-image: url('@/assets/background/quiz-bg-3.png'); }
.bg-4 { background-image: url('@/assets/background/quiz-bg-4.png'); }
.bg-5 { background-image: url('@/assets/background/quiz-bg-5.png'); }

.back-link {
  position: absolute;
  top: 20px;
  left: 30px;
  color: #8a6a6a;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  z-index: 10;
}

.back-link:hover {
    background-color: rgba(255, 255, 255, 0.8);
}

.quiz-main-content {
  position: absolute;
  top: 15%;
  right: 5%;
  width: 55%;
  height: 70%;
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 5;
}

.quiz-footer {
  position: absolute;
  bottom: 25px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0);
}

.question-number-display {
    font-size: 1rem;
    font-weight: bold;
    color: #666;
    text-align: right;
    margin-bottom: 15px;
}

.question-text {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  line-height: 1.5;
  text-align: left;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: auto;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid #eee;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: none;
}

.option-item:hover {
  border-color: #d1baba;
  background-color: #fffafa;
}

.option-item.selected {
  border-color: #937878;
  background-color: #fdeeee;
}

.option-label {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #5d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-right: 12px;
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
}

.option-item.selected .option-label {
  background-color: #937878;
  color: white;
}

.option-text {
  flex: 1;
  color: #333;
  font-size: 0.95rem;
}

.nav-button {
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}
.nav-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.previous {
  background-color: #f0f0f0;
  color: #666;
}

.previous:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.next {
  background-color: #937878;
  color: white;
}

.next:hover:not(:disabled) {
  background-color: #a38a8a;
}

.next:disabled, .previous:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

@media (max-width: 768px) {
    .quiz-main-content {
        width: 80%;
        right: 3%;
        left: 17%;
        height: auto;
        top: 10%;
        bottom: 15%;
        padding: 15px;
    }
    .question-text {
        font-size: 1.2rem;
        margin-bottom: 20px;
    }
    .option-item {
        padding: 10px 12px;
    }
    .quiz-footer {
        bottom: 5px;
        left: 20px;
        right: 10px;
    }
     .back-link {
        top: 15px;
        left: 15px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
     .quiz-main-content {
        width: 90%;
        left: 5%;
        right: 5%;
        top: 8%;
        bottom: 18%;
    }
     .question-text {
        font-size: 1.1rem;
    }
     .option-text {
        font-size: 0.9rem;
    }
     .nav-button {
        padding: 8px 15px;
    }
}
</style>