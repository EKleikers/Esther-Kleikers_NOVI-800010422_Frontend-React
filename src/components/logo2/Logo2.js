import styles from './Logo2.module.scss';
import React from 'react';
import {useHistory} from "react-router-dom";
import logo from '../../assets/images/logo.png';


export default function Logo2() {
    const history = useHistory();

    const clickLogo = () => {
        history.push('/bluebird');
    }

    return (
        <>
            <div
                onClick={clickLogo}
                className={styles["logo-container"]}
            >
                <div className={styles["image-container"]}>
                    <img src={logo} alt="bluebird-logo" className={styles["image"]}/>
                </div>
                <div className={styles["text-container"]}>
                    <h1 className={styles["logo-text"]}>BLUE BIRD</h1>
                </div>

            </div>
        </>
    )
}
