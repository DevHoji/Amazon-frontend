import firebase from "firebase/compat/app";
//auth
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2oLxI_MCdq8biAm0VTyvQyGlqdUGkIBY",
  authDomain: "e-clone-9d071.firebaseapp.com",
  projectId: "e-clone-9d071",
  storageBucket: "e-clone-9d071.firebasestorage.app",
  messagingSenderId: "740427097289",
  appId: "1:740427097289:web:e45e8aff2ea2a7fbc29918",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


