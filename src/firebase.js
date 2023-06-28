// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyC0M_ZvDSaHdABaxATxZJPYp6VoNGB8rss",
  authDomain: "forge-twitter-b5509.firebaseapp.com",
  projectId: "forge-twitter-b5509",
  storageBucket: "forge-twitter-b5509.appspot.com",
  messagingSenderId: "530313208280",
  appId: "1:530313208280:web:3eb0d83fb07342969c92ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

