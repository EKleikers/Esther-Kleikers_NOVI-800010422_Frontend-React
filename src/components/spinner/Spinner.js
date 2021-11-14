import Loader from "react-loader-spinner";
import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={styles["loader-container"]}>
            <Loader/>
        </div>
    )
}
