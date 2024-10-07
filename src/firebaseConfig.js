// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEVtvkUAaxGoUrbjKppBRdTi6jmbqvN_k",
  authDomain: "tugas-diks.firebaseapp.com",
  projectId: "tugas-diks",
  storageBucket: "tugas-diks.appspot.com",
  messagingSenderId: "683040092789",
  appId: "1:683040092789:web:22750c656dfbf5b2e07e3c",
  measurementId: "G-2L5QMF5892"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
