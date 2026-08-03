// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyBla8U3ABFNdryefZp8pTwoVGJmZncNQPs",
  authDomain: "zaynytstore.firebaseapp.com",
  projectId: "zaynytstore",
  storageBucket: "zaynytstore.firebasestorage.app",
  messagingSenderId: "224758287869",
  appId: "1:224758287869:web:092f27ee0496df0b289d94",
  measurementId: "G-7YY7512C4F"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Authentication

const auth = getAuth(app);


// Google Login

const googleProvider = new GoogleAuthProvider();


// Firestore Database

const db = getFirestore(app);


export {
    auth,
    googleProvider,
    signInWithPopup,
    db
};
