// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyAsiowIUF4JXm4HGOAUCWTUPB_TmFpOZrk",
  authDomain: "school-management-611cf.firebaseapp.com",
  projectId: "school-management-611cf",
  storageBucket: "school-management-611cf.appspot.com",
  messagingSenderId: "188613759255",
  appId: "1:188613759255:web:7bc103dc3bfd6c8977a752"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);