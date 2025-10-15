// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBGhnzCqpUeWpgZ0Xy_JoHayVls2rxWxM",
  authDomain: "otterloon-4f967.firebaseapp.com",
  projectId: "otterloon-4f967",
  storageBucket: "otterloon-4f967.appspot.com",
  messagingSenderId: "874949428540",
  appId: "1:874949428540:web:3f100263fb8af1c3364a39"
};

// Initialize Firebase
const otterloon = initializeApp(firebaseConfig);
const db = getFirestore(otterloon);

export { db } 