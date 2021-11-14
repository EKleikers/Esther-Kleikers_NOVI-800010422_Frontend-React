import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from './Signin.module.css';
import users from "../../../data/users.json";
import {Link, useHistory} from "react-router-dom";
import BlueButton from "../../../components/bluebutton/BlueButton";
import Logo from "../../../components/logo/Logo"
import Input from "../../../components/input/Input";
import Signup from "../signup/Signup";
import partners from "../../../data/partners.json";

export default function Signin({signinOpen, setSigninOpen, signupOpen, setSignupOpen}) {
    const {handleSubmit, register, formState: {errors}, watch, reset} = useForm({mode: 'all',});
    console.log({signinOpen, signupOpen});

    const history = useHistory();

    const handleClose = (event) => {
        console.log("function: handleClose");
        // event.preventDefault();
        // setSigninOpen((signinOpen) => !signinOpen);
        setSigninOpen(false)
        // console.log("popup sigin close")
        console.log({signinOpen, signupOpen});
    }

    const handleSignup = (event) => {
        console.log("function: handleSignup");
        // event.preventDefault();
        // setSigninOpen(false);
        // console.log("popup sigin close")
        setSignupOpen(true);
        // console.log("popup signup open close")
        // setSignupOpen((signupOpen) => !signupOpen);
        console.log({signinOpen, signupOpen});

    }

    const handleSignin = (name) => {
        console.log("function: handleSignin");
        handleClose();
        // reset();
        alert(`Welcome back ${name}`)
        // setAuth(true);
    }

    const onFormSubmit = (data) => {
        console.log("function: onformsubmit");

        console.log(data);

        users.find(users => users.name === data.name && users.password === data.password) ?
            (
                handleSignin(data.name)
            ) : (
                alert("This combination does not exist")
            )
    }


    return (
        <div className={styles["popup-container"]}>
            <div className={styles["popup"]}>
                <div className={styles["popup-header"]}>
                    <div className={styles["logo"]}>
                        <Logo/>
                    </div>
                    <button
                        className={styles["close-icon"]}
                        onClick={handleClose}
                    >
                        x
                    </button>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <h1>SIGN IN</h1>
                    <Input
                        input_type="text"
                        placeholder="Username"
                        register_name="name"
                        register={register}
                        required_value={true}
                        required_message="Please fill in your username"
                        // pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                        // pattern_message="this is not a valid email address"
                        input_id="name"
                        errors={errors}
                    >
                    </Input>

                    <Input
                        input_type="text"
                        placeholder="Password"
                        register_name="password"
                        register={register}
                        required_value={true}
                        required_message="Please fill in you password"
                        // pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                        // pattern_message="pasword needs to be min 8 characters long"
                        input_id="password"
                        errors={errors}
                    >
                    </Input>

                    <div>
                        <br/>
                        <BlueButton
                            type="submit"
                            // clickHandler={handleSignin}
                        >
                            SIGN IN
                        </BlueButton>
                    </div>

                </form>
                <div className={styles["popup-footer"]}>
                    <h2>New Here?</h2>
                    <button className={styles["button-link"]}
                            onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                    {/*{signupOpen ? (*/}
                    {/*    <Signup*/}
                    {/*        signupOpen={signupOpen} setSignupOpen={setSignupOpen}*/}
                    {/*        signinOpen={signinOpen} setSigninOpen={setSigninOpen}*/}
                    {/*    />) : ("")}*/}
                </div>
                {signupOpen ? (
                    <Signup
                        signupOpen={signupOpen} setSignupOpen={setSignupOpen}
                        signinOpen={signinOpen} setSigninOpen={setSigninOpen}
                    />) : ("")}
            </div>

        </div>
    )
}

