// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLqayM5RR2dJOliOFbQiR91cCnEhmpVFE",
    authDomain: "log-ot.firebaseapp.com",
    projectId: "log-ot",
    storageBucket: "log-ot.appspot.com",
    messagingSenderId: "597173211599",
    appId: "1:597173211599:web:ba9346f753bfde8eab42ba",
    measurementId: "G-SVFLN4L01J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage } from 'firebase/storage'
const storage = getStorage(app)

export { storage }