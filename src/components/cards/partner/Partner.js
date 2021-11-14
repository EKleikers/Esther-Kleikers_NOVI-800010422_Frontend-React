import React from 'react';
import styles from './PartnerButton.module.css';
import bird from "../../assets/bird.png";

export default function PartnerButton({image, alt, link}) {

    return (
        <>
            <div
                 className={styles["partner-container"]}
            >
                <a
                    className={styles["partner-button"]}
                    target="_blank"
                    href={link}
                >
                    <img
                        src={image}
                        alt={alt}

                    />
                </a>
            </div>
        </>
    )
}
