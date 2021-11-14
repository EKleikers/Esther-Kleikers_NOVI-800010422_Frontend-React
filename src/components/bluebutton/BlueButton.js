import React from 'react';
import styles from './BlueButton.module.scss';

export default function BlueButton({children, clickHandler, type}) {
    return (
        <>
            <div className={styles["button-container"]}>
                <button
                    className={styles["button"]}
                    onClick={clickHandler}
                    type={type}
                >
                    {children}
                </button>
            </div>
        < />
    )
}

