// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4b25c.firebaseapp.com",
  projectId: "mern-blog-4b25c",
  storageBucket: "mern-blog-4b25c.appspot.com",
  messagingSenderId: "588266478061",
  appId: "1:588266478061:web:8f147ff722d4dcb2e9afe4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);