import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import styles from './Signin.module.scss';
import BlueButton from "../../components/bluebutton/BlueButton";
import Logo2 from "../../components/logo2/Logo2"
import Input from "../../components/input/Input";

import {AuthContext} from '../../context/AuthContext'

export default function Signin({signinOpen, setSigninOpen, signupOpen, setSignupOpen}) {

    const {handleSubmit, register, formState: {errors}} = useForm({mode: 'all',});
    const {action, email, password} = useContext(AuthContext);
    const [signinAction, setSigninAction] = action;
    const [signinEmail, setSigninEmail] = email;
    const [signinPassword, setSigninPassword] = password;

    //change useState AuthContext to call firebase actions
    const handleSignin = (data) => {
        setSigninEmail(data.email);
        setSigninPassword(data.password);
        setSigninAction('signin');
        handleClose();
        // history.push('/bluebird');
    };

    //toggle show/hide signin pop-up
    const SigninForm = (event) => {
        setSigninOpen(!signinOpen);
    }

    //toggle show/hide signup pop-up
    const SignupForm = (event) => {
        setSignupOpen(!signupOpen);
    }

    //close signin pop-up
    const handleClose = (event) => {
        setSigninOpen(false)
    }

    const handleSignup = (event) => {
        SigninForm()
        SignupForm()
    }

    return (
        <>
            <div className={styles["popup-container"]}>
                <div className={styles["popup"]}>
                    <div className={styles["popup-header"]}>
                        <div className={styles["logo"]}>
                            <Logo2/>
                        </div>
                        <button
                            className={styles["close-icon"]}
                            onClick={SigninForm}
                        >
                            x
                        </button>
                    </div>

                    <div className={styles["popup-title"]}>
                        <h1>SIGN IN</h1>
                    </div>

                    <form onSubmit={handleSubmit(handleSignin)}>


                        <div className={styles["input-container"]}>
                            <Input
                                input_type="text"
                                placeholder="E-mail"
                                register_name="email"
                                register={register}
                                required_value={true}
                                required_message="Please fill in your email"
                                pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                                pattern_message="this is not a valid email address"
                                input_id="email"
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

                            <div className={styles["blue-button"]}>
                                <br/>
                                <BlueButton
                                    type="submit"
                                >
                                    SIGN IN
                                </BlueButton>
                            </div>
                        </div>
                    </form>
                    <div className={styles["popup-footer"]}>
                        <h2>New Here?</h2>
                        <button className={styles["button-link"]}
                                onClick={handleSignup}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
    // }
}

