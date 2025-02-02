// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpvyk99WH0sGeVABZaSpqq4as-kaC1fg",
  authDomain: "portfolio-f8122.firebaseapp.com",
  projectId: "portfolio-f8122",
  storageBucket: "portfolio-f8122.firebasestorage.app",
  messagingSenderId: "933552300458",
  appId: "1:933552300458:web:1243dafcc0f1e183a14bd3",
  measurementId: "G-S41XHQP8Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);