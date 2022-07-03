// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK5bDSbDcJWev-OelXqoNlFUdr8ZBbCrE",
  authDomain: "e-shop-d68f0.firebaseapp.com",
  projectId: "e-shop-d68f0",
  storageBucket: "e-shop-d68f0.appspot.com",
  messagingSenderId: "1008292732959",
  appId: "1:1008292732959:web:2a9a8466ce54944758f52a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;