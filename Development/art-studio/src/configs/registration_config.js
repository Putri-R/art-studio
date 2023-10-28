import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Inisial Firebase dengan project config
const firebaseConfig = {
    apiKey: "AIzaSyCOVszf8u17O1tCtildPYSYFn_1UwE3cGc",
    authDomain: "art-studio---registration.firebaseapp.com",
    projectId: "art-studio---registration",
    storageBucket: "art-studio---registration.appspot.com",
    messagingSenderId: "1047945664768",
    appId: "1:1047945664768:web:b2eadcbcbfabc6efc83be5",
    measurementId: "G-69X836W9YN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;