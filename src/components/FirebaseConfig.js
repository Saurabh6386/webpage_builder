import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBnR8-9TdJePTmefv_xDQIjav-Rj5xJzwc",
    authDomain: "webpage-builder-36417.firebaseapp.com",
    projectId: "webpage-builder-36417",
    storageBucket: "webpage-builder-36417.appspot.com",
    messagingSenderId: "350772026493",
    appId: "1:350772026493:web:86ebd299db8f7498baa514",
    measurementId: "G-YRDWHDLR1D"
  };

// initialize firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }

