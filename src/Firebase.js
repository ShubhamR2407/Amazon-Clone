import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHYjy3_9bXdf9YsACw8s5AbLDjZiD5Tbk",
    authDomain: "clone-9d933.firebaseapp.com",
    projectId: "clone-9d933",
    storageBucket: "clone-9d933.appspot.com",
    messagingSenderId: "369984803229",
    appId: "1:369984803229:web:e28a7c2c13628907fe9f74",
    measurementId: "G-JWD27V36MW"
})

const auth = firebase.auth();

export {auth}