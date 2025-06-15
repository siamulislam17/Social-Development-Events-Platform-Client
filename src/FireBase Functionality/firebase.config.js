// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdH-5uCh-rpzdgM1BGMi7vngENQ3K_muY",
  authDomain: "social-development-event-f45ac.firebaseapp.com",
  projectId: "social-development-event-f45ac",
  storageBucket: "social-development-event-f45ac.firebasestorage.app",
  messagingSenderId: "857594781972",
  appId: "1:857594781972:web:da2bf7e32887a3963a2201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);