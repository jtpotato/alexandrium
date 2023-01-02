// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseDevConfig = {
  apiKey: "AIzaSyBlnx3vukVKCpmx6jYFg00qQlJWZ0BXF0E",
  authDomain: "alexandrium-dev.firebaseapp.com",
  projectId: "alexandrium-dev",
  storageBucket: "alexandrium-dev.appspot.com",
  messagingSenderId: "563355978850",
  appId: "1:563355978850:web:703820c4358a31ae86953b",
  measurementId: "G-EZJKRJZSWP"
};

// Initialize Firebase
console.log("initialising firebase")
const app = initializeApp(firebaseDevConfig);