// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAt1v1WatC0BBeWiifpcx054hlUvW5NbaI",
  authDomain: "housemarketplace-app-6347a.firebaseapp.com",
  projectId: "housemarketplace-app-6347a",
  storageBucket: "housemarketplace-app-6347a.appspot.com",
  messagingSenderId: "30698790430",
  appId: "1:30698790430:web:f282f6fdb2877719a8d80f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

export const db = getFirestore()
