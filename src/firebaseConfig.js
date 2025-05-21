import {initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//configurações do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAehPmnjSAF7X-KPna7pdrn5D9GqhEGIVY",
  authDomain: "moodly-9428b.firebaseapp.com",
  projectId: "moodly-9428b",
  storageBucket: "moodly-9428b.firebasestorage.app",
  messagingSenderId: "914210826067",
  appId: "1:914210826067:web:a55eb053e7fbc557d4a3a6"
};

//inicialiar o firebase
 export const app = initializeApp(firebaseConfig);
 export const googleProvider = new GoogleAuthProvider();
//gerencia a autenticação de usuarios no firebase ( login, logout, estado do usuario)
export const auth = getAuth(app);
export const db=getFirestore(app);
