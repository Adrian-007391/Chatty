// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7-vlQtT0f3cY37y--gibN5GkO4WVirik",
  authDomain: "chatty-13f17.firebaseapp.com",
  projectId: "chatty-13f17",
  storageBucket: "chatty-13f17.appspot.com",
  messagingSenderId: "330543468371",
  appId: "1:330543468371:web:f43c411f658d1cddf71ba6",
  measurementId: "G-QDTK6K6QRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
