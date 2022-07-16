import firebase from 'firebase'
import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvJB7MinAIlUnc2UcxgyTsIFy_Vu0zc_Q",
  authDomain: "linkedin-fc3d3.firebaseapp.com",
  projectId: "linkedin-fc3d3",
  storageBucket: "linkedin-fc3d3.appspot.com",
  messagingSenderId: "956382977586",
  appId: "1:956382977586:web:18b386cc686445e43b262b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.getAuth();
export {db , auth};
