// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTVQEZIFdDL18RqYvaDPryJazS491mm5w",
  authDomain: "mern-oauth-cc838.firebaseapp.com",
  projectId: "mern-oauth-cc838",
  storageBucket: "mern-oauth-cc838.firebasestorage.app",
  messagingSenderId: "540653454532",
  appId: "1:540653454532:web:634d6018ddef635686b591",
  measurementId: "G-145L8YFJB7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);