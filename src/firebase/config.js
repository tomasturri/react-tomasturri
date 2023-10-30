// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9XxnAtDoBAUfcJuk5CGNgW3sNj6S04fE",
  authDomain: "pryecto-react.firebaseapp.com",
  projectId: "pryecto-react",
  storageBucket: "pryecto-react.appspot.com",
  messagingSenderId: "298969553712",
  appId: "1:298969553712:web:5db80dd7a3f9945c2c46f5",
  measurementId: "G-JKF9LSHJG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);