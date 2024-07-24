// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIO7WZZ6VthygDhAqwM2fVCszc0Y0O6Uk",
  authDomain: "supmedic-388d1.firebaseapp.com",
  projectId: "supmedic-388d1",
  storageBucket: "supmedic-388d1.appspot.com",
  messagingSenderId: "1071557574918",
  appId: "1:1071557574918:web:7052aa753c42b8d2cb5e87",
  measurementId: "G-JEEN3G4PC0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);