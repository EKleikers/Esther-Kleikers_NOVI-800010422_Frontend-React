import styles from './Topmenu.module.scss';
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

import {Profile, Signin, Signup} from "../../popups";

import {AuthContext} from '../../context/AuthContext'

export default function Topmenu() {

    const {authentication, action, name} = useContext(AuthContext);
    const [topmenuAction, setTopmenuAction] = action;
    const [topmenuAuth] = authentication;
    const [topmenuName, setTopmenuName] = name

    const [signinOpen, setSigninOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false)

    //toggle show/hide signin pop-up
    const signinForm = () => {
        setSigninOpen(!signinOpen);
    }

    //toggle show/hide dropdownmenu
    const dropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    //toggle show/hide profile pop-up
    const profileForm = () => {
        setProfileOpen(!profileOpen);
        dropdown();
    }

    //firebase call user logout
    const logout = () => {
        setTopmenuAction('logout')
        dropdown();
    }

    //firebase call user unsubscribe
    const unsubscribe = () => {
        console.log("topmenu -unsubscribe");
        setTopmenuAction('unsubscribe');
        //dropdown();
    }

    return (
        <nav>
            <div className={styles["nav-container"]}>
                <ul className={styles["list"]}>
                    <li>
                        <NavLink
                            to='/'
                            exact
                            className={styles["link"]}
                            activeClassName={styles["active-link"]}
                        >
                            HOME
                        </NavLink>
                    </li>
                    {topmenuAuth ? (
                        <>
                            <li>
                                <div
                                    className={styles["button-link"]}
                                    onClick={dropdown}
                                >
                                    {topmenuName.toUpperCase()}
                                </div>
                                <nav
                                >
                                    {dropdownOpen ? (
                                        <div className="menu-container">
                                            <ul className={styles["nav-dropdown"]}>
                                                <li onClick={profileForm}>profile</li>
                                                <li onClick={logout}>logout</li>
                                                <li onClick={unsubscribe}>unsubscribe</li>
                                            </ul>
                                        </div>
                                    ) : ("")
                                    }
                                </nav>
                            </li>
                            <li>
                                <NavLink
                                    to='/search'
                                    className={styles["link"]}
                                    activeClassName={styles["active-link"]}
                                >
                                    SEARCH
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button
                                className={styles["button-link"]}
                                type='button'
                                onClick={signinForm}
                            >
                                SIGN IN
                            </button>
                        </li>
                    )}
                    <li>
                        <NavLink
                            to='/donate'
                            className={styles["link"]}
                            activeClassName={styles["active-link"]}
                        >
                            DONATE
                        </NavLink>
                    </li>
                    {signinOpen ? (
                        <Signin
                            signinOpen={signinOpen} setSigninOpen={setSigninOpen}
                            signupOpen={signupOpen} setSignupOpen={setSignupOpen}
                        />) : ("")}

                    {signupOpen ? (
                        <Signup
                            signupOpen={signupOpen} setSignupOpen={setSignupOpen}
                            signinOpen={signinOpen} setSigninOpen={setSigninOpen}
                        />) : ("")}
                    {profileOpen ? (
                        <Profile
                            profileOpen={profileOpen} setProfileOpen={setProfileOpen}
                        />) : ("")}
                </ul>
            </div>
        </nav>
    )
}
