// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-431e6.firebaseapp.com",
  projectId: "mern-blog-431e6",
  storageBucket: "mern-blog-431e6.appspot.com",
  messagingSenderId: "731202889034",
  appId: "1:731202889034:web:5226b99f25fabcb0720db3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);