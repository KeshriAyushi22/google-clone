import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAuzPTwbq634sWjLlgkoFX9vIZrvPB5oFo",
    authDomain: "clone-99cda.firebaseapp.com",
    databaseURL: "https://clone-99cda.firebaseio.com",
    projectId: "clone-99cda",
    storageBucket: "clone-99cda.appspot.com",
    messagingSenderId: "1095929444963",
    appId: "1:1095929444963:web:3b0399f51eed7821681656",
    measurementId: "G-8EZ4EPG3W9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

//using authentication
const auth = firebaseApp.auth();
export { auth }