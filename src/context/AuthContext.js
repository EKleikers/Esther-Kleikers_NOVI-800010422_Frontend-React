import React, {useState, useEffect, createContext} from 'react'
import {db, signin, signup, logout, unsubscribe} from '../modules/firebase'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {doc, onSnapshot} from "firebase/firestore"

//Context
export const AuthContext = createContext()

//Provider
export const AuthProvider = props => {

    const [user, setUser] = useState('');
    const [authentication, toggleAuthentication] = useState('')
    const [action, setAction] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // userState
    useEffect(() => {
        const auth = getAuth()
        return onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    //get data from firebase db
    useEffect(() => {

        if (!user) {
            toggleAuthentication(false);
            return
        } else {
            //getUserData();
            toggleAuthentication(true);
            const userData = doc(db, 'users', user.uid)
            const getData = onSnapshot(userData, doc => {
                const data = doc.data();
                setName(data.name);
                setEmail(data.email);
            })
            return getData;
        }
    }, [user])

    //call firebase actions
    useEffect(() => {

        async function firebaseAction() {
            try {
                if (action === 'signin') {
                    const signinUser = await signin(email, password)
                    setUser(signinUser);
                    //toggleAuthentication(true)
                    alert(`Welcome back ${name}`)
                    return signinUser
                }
                if (action === 'signup') {
                    const signupUser = await signup(email, password, name)
                    setUser(signupUser);
                    toggleAuthentication(true)
                    alert(`${name} welcome at bluebird!`)
                    return signupUser
                }
                if (action === 'logout') {
                    const logoutUser = await logout();
                    setUser(null);
                    toggleAuthentication(false)
                    alert(`Please visit us again soon!`)
                    return logoutUser;
                }
                if (action === 'unsubscribe') {
                    const deleteUser = await unsubscribe();
                    //setUser(null);
                    //toggleAuthentication(false)
                    //alert(`We are sorry to see you go!`)
                    return deleteUser;
                }
            } catch (e) {
                switch (e.code) {
                    case 'auth/user-not-found':
                        alert('There is no account associated with this email address.');
                        break;
                    case 'auth/wrong-password':
                        alert('Wrong password. Try again.');
                        break;
                    default:
                        alert("something went wrong");
                }
                setUser(null)
                console.log(e)
            }
            ;
        };
        firebaseAction();
    }, [action]);


    return (
        <AuthContext.Provider
            value={{
                action: [action, setAction],
                email: [email, setEmail],
                password: [password, setPassword],
                name: [name, setName],
                authentication: [authentication, toggleAuthentication]
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

