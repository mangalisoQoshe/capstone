// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAEB2vPOY4FSrQzlKIhOnEbL3-ryvaEk4",
  authDomain: "solarviz-6bd19.firebaseapp.com",
  projectId: "solarviz-6bd19",
  storageBucket: "solarviz-6bd19.appspot.com",
  messagingSenderId: "323127817502",
  appId: "1:323127817502:web:28e68e03176a54a160850f",
  measurementId: "G-0N2W91QTJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export default app;



// Firebase USER CRUD 

// LOGOUT USER
export const logOut = async() => {
    try {
      await signOut(authService)
    window.location.reload()
    window.location.href = "/login"
    } catch (error) {
     alert(error.message, "Erro While logging out, Please contact system administrator")
    }
  };