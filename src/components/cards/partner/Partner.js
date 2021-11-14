import React from 'react';
import styles from './Partner.module.scss';

export default function Partner({image, alt, link}) {

    return (
        <>
            <section className={styles["section-container"]}
            >
                <div
                    className={styles["partner-container"]}
                >
                    <a
                        className={styles["partner-button"]}
                        href={link}
                    >
                        <img
                            className={styles["partner-image"]}
                            src={image}
                            alt={alt}

                        />
                    </a>
                </div>
            </section>
        </>
    )
}
