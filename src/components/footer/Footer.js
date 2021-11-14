import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
    return(
        <>
            <div className={styles["footer-container"]}>
            <h2 className={styles["footer-text"]}>
                Esther Kleikers - NOVI-800010422 - Frontend 2021/5
            </h2>
            </div>
        </>
    )
}
