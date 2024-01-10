// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDywEkke-qX-AWBD3SCaV9MXhg_LHC6FyY",
    authDomain: "linkedin-clone-6dc87.firebaseapp.com",
    projectId: "linkedin-clone-6dc87",
    storageBucket: "linkedin-clone-6dc87.appspot.com",
    messagingSenderId: "1022887336923",
    appId: "1:1022887336923:web:f839a6915527fa7f9825fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();