// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaLS9WIvUUKik1W2o6osLeNAp0k1_8vCo",
  authDomain: "bustrackingreactnative.firebaseapp.com",
  projectId: "bustrackingreactnative",
  storageBucket: "bustrackingreactnative.appspot.com",
  messagingSenderId: "756834661473",
  appId: "1:756834661473:web:593902b968177b702ae620"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);