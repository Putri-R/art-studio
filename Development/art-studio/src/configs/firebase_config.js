import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfigForTestimony = {
    apiKey: "AIzaSyBJcyKv1UpOdpbr5q2sj4c_C9MHn7clCzw",
    authDomain: "art-studio---testimoni.firebaseapp.com",
    projectId: "art-studio---testimoni",
    storageBucket: "art-studio---testimoni.appspot.com",
    messagingSenderId: "200425453060",
    appId: "1:200425453060:web:70935956be170158962751",
    measurementId: "G-X572CYZPRC"
};

const appTestimony = initializeApp(firebaseConfigForTestimony, "Testimoni");
const dbTestimony = getFirestore(appTestimony);

export default dbTestimony;
