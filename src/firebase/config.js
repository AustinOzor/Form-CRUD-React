import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGNkCOrvD2V7N483blyBlMjR4ppAZPx2M",
  authDomain: "user-contact-b6879.firebaseapp.com",
  projectId: "user-contact-b6879",
  storageBucket: "user-contact-b6879.appspot.com",
  messagingSenderId: "357827379482",
  appId: "1:357827379482:web:ee0cece95ffc7a1de4eca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)