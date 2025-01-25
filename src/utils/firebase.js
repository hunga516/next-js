// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgXcs9G0afqhocLQtWh-cuY2f1x7hObvA",
    authDomain: "forum-gtavi.firebaseapp.com",
    projectId: "forum-gtavi",
    storageBucket: "forum-gtavi.appspot.com",
    messagingSenderId: "307343759270",
    appId: "1:307343759270:web:ef7014612f89e7ad57a167",
    measurementId: "G-3B1BFXF4HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()