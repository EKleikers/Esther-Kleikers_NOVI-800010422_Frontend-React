import React from 'react';
import styles from './Partner.module.scss';
//import bird from "../../../assets/bird.png";

export default function Partner({image, alt, link}) {

    return (
        <>
            <section className={styles["section-container"]}
                     href={link}
            >
                <div
                    className={styles["partner-container"]}
                >
                    <a
                        className={styles["partner-button"]}
           

                    >
                        <img
                            src={image}
                            alt={alt}

                        />
                    </a>
                </div>
            </section>
        </>
    )
}
