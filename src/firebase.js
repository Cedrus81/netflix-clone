import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDj7R77rxajMwqpzWtt2DGkNyRfBzMVHFc",
    authDomain: "netflix-clone-56377.firebaseapp.com",
    projectId: "netflix-clone-56377",
    storageBucket: "netflix-clone-56377.appspot.com",
    messagingSenderId: "772904251438",
    appId: "1:772904251438:web:1acc6c5be065c789ccafbf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }