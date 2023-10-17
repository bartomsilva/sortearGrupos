// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDZjDkUUCgEVUU8Po0StlCA4RdC1VN7ZcE",
  authDomain: "make-groups.firebaseapp.com",
  projectId: "make-groups",
  storageBucket: "make-groups.appspot.com",
  messagingSenderId: "290910501302",
  appId: "1:290910501302:web:68ad5e63c00b0b241a6917",
  measurementId: "G-J7BHQ3H2QB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };