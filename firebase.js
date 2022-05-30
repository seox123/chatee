// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT-t-Ppfqto_G72gww44wuLEfBWE67W04",
  authDomain: "chatee-0.firebaseapp.com",
  projectId: "chatee-0",
  storageBucket: "chatee-0.appspot.com",
  messagingSenderId: "147926839139",
  appId: "1:147926839139:web:b4b56e004321b4684cad56",
  measurementId: "G-CZKXSXGW1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

var logged;

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("not logged in");
  }
});

export { auth };
