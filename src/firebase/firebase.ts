import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3G1ZAdYm_mcof6C9lhpHDaGgG-GnKAVw",
  authDomain: "simple-firebase-ef84d.firebaseapp.com",
  projectId: "simple-firebase-ef84d",
  storageBucket: "simple-firebase-ef84d.appspot.com",
  messagingSenderId: "159256174066",
  appId: "1:159256174066:web:f5b6fd67f62cb0b9e61f6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
