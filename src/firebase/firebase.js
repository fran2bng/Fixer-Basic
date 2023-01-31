import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL, getByte } from "firebase/storage";
import { getFirestore, collection, addDoc, getDoc, doc, query, where, setDoc, deleteDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkbUShBfKBEjdHIHrvunsjMf2VJPZ8Y54",
  authDomain: "fixer-basic.firebaseapp.com",
  projectId: "fixer-basic",
  storageBucket: "fixer-basic.appspot.com",
  messagingSenderId: "330466710045",
  appId: "1:330466710045:web:67408e992777d152996cf4",
  measurementId: "G-VH3JJ7JKL5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);