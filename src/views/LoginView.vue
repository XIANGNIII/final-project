<template>
  <div class="login-bg">
    <div class="login-container">
      <div class="main-title">
        <h1>IN THE NIGHT GARDEN</h1>
        <h1>CHARACTER QUIZ</h1>
      </div>

      <div class="login-form">
        <h2>{{ t('login') }}</h2>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div class="form-group">
          <label>{{ t('username') }}</label>
          <input type="text" :placeholder="t('Enter Username')" v-model="username">
        </div>

        <div class="form-group">
          <label>{{ t('password') }}</label>
          <input type="password" :placeholder="t('Enter Password')" v-model="password">
        </div>

        <button class="login-btn" @click="handleLogin" :disabled="loading">
          {{ loading ? t('Logging In') : t('login') }}
        </button>

        <div class="register-link">
          {{ t('DontHaveAccount') }} <router-link to="/register">{{ t('register') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { t } from '../utils/i18n'

const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  if (!username.value || !password.value) {
    errorMessage.value = t('loginFailed') || '请输入用户名和密码';
    return;
  }

  loading.value = true;
  errorMessage.value = '';

  try {
    let userEmail = null;

    try {
      const userDocRef = doc(db, 'usersList', username.value);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        userEmail = userDoc.data()?.email;
      }
    } catch (e) {
    }

    if (!userEmail) {
      const usersListRef = collection(db, 'usersList');
      const usersQuery = query(usersListRef, where('username', '==', username.value));
      const usersSnapshot = await getDocs(usersQuery);
      if (!usersSnapshot.empty) {
        userEmail = usersSnapshot.docs[0].data()?.email;
      }
    }

    if (!userEmail) {
      errorMessage.value = t('usernameNotExist') || '用户名不存在';
      loading.value = false;
      return;
    }

    await signInWithEmailAndPassword(auth, userEmail, password.value);
    router.push('/home');

  } catch (error) {
    if (error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/invalid-email') {
      errorMessage.value = t('incorrectPassword') || '用户名或密码错误';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage.value = t('tooManyAttempts') || '登录尝试次数过多，请稍后再试';
    } else {
      errorMessage.value = t('loginFailed') || '登录时发生错误，请稍后重试';
    }
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.login-bg {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/background/loginBG.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: auto;
}

.main-title {
  margin-bottom: 20px;
  text-align: center;
}

.main-title h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: #5d4d4d;
  line-height: 1.1;
  letter-spacing: 2px;
  margin: 0;
}

.login-form {
  width: 100%;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #5d4d4d;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
}

.error-message {
  background-color: #ffebee;
  color: #d32f2f;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #5d4d4d;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #937878;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #b39b9b;
}

.login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.register-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #5d4d4d;
}

.register-link a {
  color: #4a7e8a;
  text-decoration: none;
  font-weight: bold;
}

.register-link a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-container {
    width: 90%;
  }

  .main-title h1 {
    font-size: 2rem;
  }
}
</style>