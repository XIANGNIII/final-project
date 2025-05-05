<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user && (router.currentRoute.value.path === '/login' || router.currentRoute.value.path === '/register')) {
      router.push('/home')
    }
  })
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  color: #333;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4a90e2;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #357ab8;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>