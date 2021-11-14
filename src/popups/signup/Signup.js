import React from 'react';
import styles from './Signup.module.css';
import Logo from "../../../components/logo/Logo";

export default function Signup({setSignupOpen}) {

    const handleClose = (event) => {
        // event.preventDefault();
        setSignupOpen(false);
        console.log("popup sigin close")
    }

    return(
        <>
            <div className={styles["popup-box"]}>
                <div className={styles["box"]}>
                    <div className={styles["logo"]}>
                        <Logo/>
                    </div>
                    <button
                        className={styles["close-icon"]}
                        onClick={handleClose}
                    >
                        x
                    </button>
                    <form
                        // onSubmit={handleSubmit(onFormSubmit)}>
                        SIGN UP
                        >

                    </form>
                </div>
            </div>

        </>
    )
}
