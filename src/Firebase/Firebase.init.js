// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKcQYIG99q53B5-vgE_oYD1qjblMkKyZ4",
    authDomain: "to-do-app-ff7f3.firebaseapp.com",
    projectId: "to-do-app-ff7f3",
    storageBucket: "to-do-app-ff7f3.appspot.com",
    messagingSenderId: "674354389740",
    appId: "1:674354389740:web:448f60cb5c856a3322bbc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;