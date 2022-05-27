import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2UbZdNOVhetQvWwIQYSJuK153Ze6amyI",
  authDomain: "facebook-d8167.firebaseapp.com",
  projectId: "facebook-d8167",
  storageBucket: "facebook-d8167.appspot.com",
  messagingSenderId: "346000138147",
  appId: "1:346000138147:web:61aec488e9fac36dab0416"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
