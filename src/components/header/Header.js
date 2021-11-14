import styles from "./Header.module.scss";
import React from 'react';
import Topmenu from "../topmenu/Topmenu";
import Logo from "../logo/Logo";

export default function Header() {

    return (
        <>
            <div className={styles["header-container"]}>
                <Logo/>
                <div className={styles["topmenu-container"]}>
                    <Topmenu/>
                </div>
            </div>
        < />
    )
}
