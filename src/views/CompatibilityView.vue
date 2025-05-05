<template>
  <div class="compatibility-container">
    <div class="compatibility-card">
      <div class="header">
        <h1>Compatibility Check</h1>
        <router-link to="/home" class="home-link">Back to Home</router-link>
      </div>
      <div class="content" v-if="userA && userB">
        <h2>{{ userA }} & {{ userB }}</h2>
        <div class="score-display">
          <span class="score">{{ score }}%</span>
          <div class="score-bar-container">
            <div class="score-bar" :style="{ width: `${score}%` }"></div>
          </div>
        </div>
        <p class="interpretation">{{ interpretationText }}</p>
      </div>
      <div class="content error" v-else>
        <p>Could not load compatibility data.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const userA = ref('');
const userB = ref('');
const score = ref(0);
const interpretation = ref('');

const interpretationText = computed(() => {
    try {
        return decodeURIComponent(interpretation.value);
    } catch (e) {
        return "Compatibility interpretation unavailable.";
    }
});

onMounted(() => {
  userA.value = route.params.userA || 'User A';
  userB.value = route.params.userB || 'User B';
  score.value = parseInt(route.params.score, 10) || 0;
  interpretation.value = route.params.interpretation || '';
});
</script>

<style scoped>
.compatibility-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: var(--background-color);
  font-family: 'Josefin Sans', sans-serif;
}

.compatibility-card {
  background-color: var(--card-color);
  border-radius: 15px;
  padding: 30px 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-border);
}

.header h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: 1px;
}

.home-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.home-link:hover {
  color: var(--primary-light);
  text-decoration: underline;
}

.content h2 {
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: 30px;
  font-weight: 600;
}

.score-display {
  margin-bottom: 30px;
}

.score {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  font-weight: normal;
  color: var(--primary-color);
  display: block;
  margin-bottom: 15px;
  line-height: 1;
}

.score-bar-container {
  height: 25px;
  background-color: var(--background-color);
  border-radius: 15px;
  overflow: hidden;
  margin: 0 auto;
  max-width: 90%;
  border: 1px solid var(--color-border);
}

.score-bar {
  height: 100%;
  background: linear-gradient(to right, var(--primary-light), var(--primary-color));
  border-radius: 15px;
  transition: width 0.8s ease-out;
}

.interpretation {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-top: 25px;
  padding: 0 10px;
}

.error p {
  color: var(--error-color);
  font-weight: bold;
  margin-top: 20px;
}

.content.error a {
  color: var(--primary-color);
  font-weight: bold;
  text-decoration: underline;
}
</style>