import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore"

import firebase from "firebase/compat";
// import 'firebase/auth';
// import 'firebase/firestore';


const { REACT_APP_apiKey, REACT_APP_authDomain, REACT_APP_projectId, REACT_APP_storageBucket, REACT_APP_messagingSenderId, REACT_APP_appId } = process.env

const firebaseConfig = {
  // apiKey: "AIzaSyBHUNye91tqiUBJxvCqjYhwRsd5Fqf1bIM",
  // authDomain: "bluebird-novi-2021.firebaseapp.com",
  // projectId: "bluebird-novi-2021",
  // storageBucket: "bluebird-novi-2021.appspot.com",
  // messagingSenderId: "404903025067",
  // appId: "1:404903025067:web:4d380a226284db1ecfdaee"
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId
}


// export default  app
// export const auth = firebase.auth();
// export const db = firebase.firestore();

// Initialize Firebase
export const app = initializeApp( firebaseConfig )
const auth = getAuth()
export const db = getFirestore()


// import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: "AIzaSyBHUNye91tqiUBJxvCqjYhwRsd5Fqf1bIM",
//   authDomain: "bluebird-novi-2021.firebaseapp.com",
//   projectId: "bluebird-novi-2021",
//   storageBucket: "bluebird-novi-2021.appspot.com",
//   messagingSenderId: "404903025067",
//   appId: "1:404903025067:web:4d380a226284db1ecfdaee"
// };
// const myApp = firebase.initializeApp(firebaseConfig);
// export const auth = myApp.auth();
