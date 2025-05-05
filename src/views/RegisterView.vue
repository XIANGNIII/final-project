<template>
  <div class="register-container">
    <h1>In the Night Garden Character Quiz</h1>
    <div class="auth-form">
      <h2>Register</h2>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Create username"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter email address"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Create password"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Enter password again"
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? t('registering') : t('register') }}
        </button>
      </form>
      <div class="auth-links">
        <p>{{ t('AlreadyHaveAccount') }} <router-link to="/login">{{ t('login') }}</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, collection, query, where, getDocs, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { t } from '../utils/i18n'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const errorMessage = ref('')

const handleRegister = async () => {
  errorMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = t('passwordsNotMatch') || 'Passwords do not match';
    return
  }
  if (password.value.length < 6) {
    errorMessage.value = t('passwordTooShort') || 'Password must be at least 6 characters';
    return
  }
  const trimmedUsername = username.value.trim();
  if (!trimmedUsername) {
      errorMessage.value = t('enterUsername') || 'Please enter a username.';
      return;
  }
  if (!email.value.trim()) {
      errorMessage.value = t('enterEmail') || 'Please enter an email.';
      return;
  }

  loading.value = true

  try {
    const usersListRef = collection(db, 'usersList');
    const usernameQueryByField = query(usersListRef, where('username', '==', trimmedUsername));
    const usernameSnapshot = await getDocs(usernameQueryByField);

    if (!usernameSnapshot.empty) {
      throw new Error('usernameExists');
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    const userData = {
      uid: user.uid,
      email: email.value,
      username: trimmedUsername,
      createdAt: new Date()
    };

    await setDoc(doc(db, 'usersList', user.uid), userData);

    router.push('/home');

  } catch (error) {
    if (error.message === 'usernameExists') {
      errorMessage.value = t('usernameExists') || 'Username is already taken.';
    } else if (error.code === 'auth/email-already-in-use') {
      errorMessage.value = t('emailExists') || 'Email address is already registered.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage.value = t('invalidEmail') || 'Please enter a valid email address.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage.value = t('weakPassword') || 'Password is too weak.';
    } else if (error.code === 'firestore/permission-denied') {
       errorMessage.value = t('registrationFailed') || 'Registration failed due to database permission issues.';
    } else {
      errorMessage.value = t('registrationFailed') || 'Registration failed. Please try again.';
    }
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: var(--background-color);
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  color: var(--text-primary);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  letter-spacing: 2px;
  line-height: 1.1;
}

.auth-form {
  background-color: var(--card-color);
  border-radius: var(--border-radius-md);
  padding: 35px 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  position: relative;
}

h2 {
  margin-bottom: 25px;
  text-align: center;
  color: var(--text-primary);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: var(--text-primary);
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  box-sizing: border-box;
}
input:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 3px rgba(147, 120, 120, 0.15);
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

button[type="submit"]:hover:not(:disabled) {
  background-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.auth-links {
  margin-top: 25px;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.auth-links a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
}

.auth-links a:hover {
  text-decoration: underline;
  color: var(--primary-light);
}

.error-message {
  background-color: #fceded;
  color: var(--error-color);
  padding: 12px 15px;
  border-radius: var(--border-radius-sm);
  margin-bottom: 20px;
  border: 1px solid var(--error-color);
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  font-size: 0.9rem;
  text-align: center;
}
</style>