import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: 'AIzaSyBBa-SKfiISkLOpmyMrgrW06xOlG4yXP2E',
    authDomain: 'twitter-clone-93201.firebaseapp.com',
    projectId: 'twitter-clone-93201',
    storageBucket: 'twitter-clone-93201.appspot.com',
    messagingSenderId: '136733951296',
    appId: '1:136733951296:web:f1b615912bac33c47c26a5',
    measurementId: 'G-NPLMV9GV01',
  });
  
export const auth = getAuth(app);