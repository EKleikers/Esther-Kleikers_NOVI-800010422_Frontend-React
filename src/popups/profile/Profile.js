import React from 'react';
import {useForm} from 'react-hook-form';
import styles from './Profile.module.scss';
import BlueButton from "../../components/bluebutton/BlueButton";
import Logo from "../../components/logo/Logo"
import Input from "../../components/input/Input";

export default function Profile({setProfileOpen}) {
    const {handleSubmit, register, formState: {errors}} = useForm({mode: 'all',});

    const handleClose = () => {
        setProfileOpen(false);
        console.log("popup sigin close")
    }

    const onFormSubmit = (data) => {
        console.log("formsubmit")
        console.log(data);
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
                <div className={styles["popup-title"]}>
                    <h1>CHANGE SETTINGS</h1>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)} className={styles["profile-form"]}>

                    <div className={styles["input-row"]}>
                        <Input
                            input_type="text"
                            placeholder="Email Address"
                            register_name="email"
                            register={register}
                            required_value={true}
                            required_message="Please fill in your username"
                            pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                            pattern_message="This is not a valid email address"
                            input_id="email"
                            errors={errors}

                        >
                        </Input>
                        <div className={styles["inbetween"]}/>
                        <Input
                            input_type="text"
                            placeholder="Repeat Email"
                            register_name="remail"
                            register={register}
                            required_value={true}
                            required_message="Please repeat you email"
                            // pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                            // pattern_message="this is not a valid email address"
                            //ad a check if this password is the same as the first one
                            input_id="rmail"
                            errors={errors}
                        >
                        </Input>
                    </div>
                    <div className={styles["input-row"]}>
                        <Input
                            input_type="password"
                            placeholder="Password"
                            register_name="password"
                            register={register}
                            required_value={true}
                            required_message="Please enter a password"
                            // pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                            // pattern_message="this is not a valid email address"
                            input_id="password"
                            errors={errors}
                        >
                        </Input>
                        <div className={styles["inbetween"]}/>
                        <Input
                            input_type="password"
                            placeholder="Repeat Password"
                            register_name="rpassword"
                            register={register}
                            required_value={true}
                            required_message="Please repeat you password"
                            // pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                            // pattern_message="this is not a valid email address"
                            //add check if this one is the same as the prevoius one
                            input_id="rpassword"
                            errors={errors}
                        >
                        </Input>
                    </div>
                    <div className={styles["input-row"]}>
                        <Input
                            input_type="text"
                            placeholder="Username"
                            register_name="name"
                            register={register}
                            required_value={true}
                            required_message="Please enter a username"
                            pattern_value={/^[a-zA-Z]*$/}
                            pattern_message="Enter a valid name"
                            minlength_value={2}
                            minlength_message="Enter a valid name"
                            input_id="name"
                            errors={errors}
                        >
                        </Input>
                        <div className={styles["inbetween"]}/>
                        <div className={styles["popup-submit"]}>
                            <BlueButton

                                type="submit"
                                // clickHandler={handleSignin}
                            >
                                SUBMIT
                            </BlueButton>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

