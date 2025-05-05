import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBELl9Kuk4S0TJR0ZfoCZXVO6t-jjuoDcQ",
  authDomain: "dumpling-555.firebaseapp.com",
  projectId: "dumpling-555",
  storageBucket: "dumpling-555.firebasestorage.app",
  messagingSenderId: "999350812221",
  appId: "1:999350812221:web:3b070419c898ccb250b454",
  measurementId: "G-746465PZRG"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };