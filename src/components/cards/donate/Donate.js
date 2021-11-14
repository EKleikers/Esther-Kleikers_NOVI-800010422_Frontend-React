import React from 'react';
import styles from './Donate.module.scss';

export default function Donate({image, alt, link}) {

    return (
        <>
            <section className={styles["section-container"]}

            >
                <div
                    className={styles["donate-container"]}
                >
                    <a
                        className={styles["donate-button"]}
                        href={link}
                    >
                        <img
                            className={styles["donate-image"]}
                            src={image}
                            alt={alt}

                        />
                    </a>
                </div>
            </section>
        </>
    )
}
