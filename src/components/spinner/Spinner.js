import Loader from "react-loader-spinner";
import React from "react";
import styles from "./Spinner.module.scss";

export default function Spinner() {
    return (
        <>
            <div className={styles["spinner-container"]}>
                <Loader
                    className={styles["spinner"]}
                    type="Rings"
                    color="#1FA5C4"
                    height="40vh"
                    width="40vh"

                />
                <h2>LOADING MIGHT TAKE A BIT LONGER</h2>
            </div>
        </>
    )
}
