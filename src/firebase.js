// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF9eFM4CScZa1N5dyCUcF5YfsD3mnaGJ0",
    authDomain: "logot-4c426.firebaseapp.com",
    projectId: "logot-4c426",
    storageBucket: "logot-4c426.appspot.com",
    messagingSenderId: "67559878022",
    appId: "1:67559878022:web:055852f237a037d611d007",
    measurementId: "G-0318L4XFJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage } from 'firebase/storage'
const storage = getStorage(app)

export { storage }