import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArP70QejPBF9TicJ09ygq4G5s0xmJO--0",
  authDomain: "twitter-reloaded-e300f.firebaseapp.com",
  projectId: "twitter-reloaded-e300f",
  storageBucket: "twitter-reloaded-e300f.appspot.com",
  messagingSenderId: "512696930540",
  appId: "1:512696930540:web:c6214e11f7c1dc806fd5c9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);