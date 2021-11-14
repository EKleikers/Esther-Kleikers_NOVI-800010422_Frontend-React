
import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {getFirestore, doc, setDoc, deleteDoc} from "firebase/firestore"

const {
    REACT_APP_apiKey,
    REACT_APP_authDomain,
    REACT_APP_projectId,
    REACT_APP_storageBucket,
    REACT_APP_messagingSenderId,
    REACT_APP_appId
} = process.env

const firebaseConfig = {

    apiKey: REACT_APP_apiKey,
    authDomain: REACT_APP_authDomain,
    projectId: REACT_APP_projectId,
    storageBucket: REACT_APP_storageBucket,
    messagingSenderId: REACT_APP_messagingSenderId,
    appId: REACT_APP_appId
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const auth = getAuth()
export const db = getFirestore()

//create account
export async function signup(email, password, name) {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const {user} = result.user;
    //add userdata to firebase db
    const documentReference = doc(db, 'users', result.user.uid)
    await setDoc(documentReference, {
        name: name,
        email: email
    }, {merge: true})
    await signin(email, password)
    return user
}

//login
export async function signin(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const {user} = result;
    return user;
}

//logout
export async function logout() {
    await signOut(auth);
}

//delete account
export async function unsubscribe(signinOpen, setSigninOpen) {

    const auth = getAuth();
    const user = auth.currentUser;
    if (user != null) {
        //prohibit deletion test account
        if (user.uid === 'VPM4NOhNWqSMr35xLEOjWtdgeor2') {
            alert("account 'esther@novi.nl' can't be deleted");
        } else {
            //delete user
            user.delete().then(function () {
                //delete db account data
                deleteDoc(doc(db, "users", user.uid));
                alert("account has been deleted.");
            }).catch(function (error) {
                //catch if login is too long ago
                if (error.code === 'auth/requires-recent-login') {
                    alert("I't been a while since your last login, please renew before unsubscribing.");
                } else {
                    console.log(error.code);
                }
            });
        }
    }
}




