// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZo8rZ89FX9RujvQp8c_ujrgEUNO7WecM",
  authDomain: "new-eccomerce.firebaseapp.com",
  projectId: "new-eccomerce",
  storageBucket: "new-eccomerce.appspot.com",
  messagingSenderId: "553592605264",
  appId: "1:553592605264:web:073c96354bbd903882df55",
  measurementId: "G-6M5TW3GP8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;