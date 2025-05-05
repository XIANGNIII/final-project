import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import ResultView from '../views/ResultView.vue'
import CompatibilityView from '../views/CompatibilityView.vue' 

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/quiz/:questionId',
    name: 'quiz',
    component: QuizView,
    meta: { requiresAuth: true }
  },
  {
    path: '/result/:resultId',
    name: 'result',
    component: ResultView,
    meta: { requiresAuth: true }
  },
  {
    path: '/compatibility/:userA/:userB/:score/:interpretation',
    name: 'compatibility',
    component: CompatibilityView,
    props: true,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { top: 0 }
    }
  })

router.beforeEach((to, from, next) => {
    if (to.path === from.path) {
      next(false)
      return
    }

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          next({ name: 'login' })
        } else {
          next()
        }
      }, (error) => {
          next({ name: 'login' });
      })
    } else {
      next()
    }
  })

export default router