// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWkzFYK9bJw_eDQ0tMyb_rZxkl4v3DVOI",
  authDomain: "trip-planner-123ed.firebaseapp.com",
  projectId: "trip-planner-123ed",
  storageBucket: "trip-planner-123ed.appspot.com",
  messagingSenderId: "461209572219",
  appId: "1:461209572219:web:1de99bfecbe9e61c5523de",
  measurementId: "G-F8M2CECVQ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 

