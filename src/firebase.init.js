// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm2c84FdZ-wyFfT75HHL9vJTRZdPyxZCc",
  authDomain: "ema-john-simple-8c998.firebaseapp.com",
  projectId: "ema-john-simple-8c998",
  storageBucket: "ema-john-simple-8c998.appspot.com",
  messagingSenderId: "269814859513",
  appId: "1:269814859513:web:9080b16cba94fc72948428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;