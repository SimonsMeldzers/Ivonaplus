// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxAU2_owTxBorGU7W8ck9jFu4eY9ogL2E",
  authDomain: "ivonaplus-3a5d4.firebaseapp.com",
  projectId: "ivonaplus-3a5d4",
  storageBucket: "ivonaplus-3a5d4.appspot.com",
  messagingSenderId: "23883466121",
  appId: "1:23883466121:web:7bd9a2a2b6139564808d58",
  measurementId: "G-Q6ZLQKMK22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();