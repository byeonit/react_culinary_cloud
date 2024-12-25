import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8JByxOnNijBkisIDdu8Q2AvupbZUmCuA",
  authDomain: "mealchronicle.firebaseapp.com",
  projectId: "mealchronicle",
  storageBucket: "mealchronicle.firebasestorage.app",
  messagingSenderId: "56866489133",
  appId: "1:56866489133:web:04f9454b301f84f15149a4",
  measurementId: "G-EKM9YNWEK0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);