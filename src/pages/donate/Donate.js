import styles from "./Donate.module.scss";

import React from 'react';

import {list_donates} from "../../data";
import {DonateCard} from "../../components/cards";

export default function DonatePage() {
    return (
        <>
            <section className={styles["page-container"]}>
                <div className={styles["page"]}>
                    <div className={styles["column1"]}>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Quisque ullamcorper ac ex
                            vel placerat. Fusce faucibus tristique nunc
                            pulvinar egestas. Proin maximus arcu sem, non
                            dignissim lectus blandit a. Integer sodales arcu
                            vitae magna sagittis placerat. Nunc pellentesque
                            dapibus magna quis congue. Aenean rutrum varius
                            purus, vel porttitor odio iaculis ac. Suspendisse
                            libero felis, ullamcorper et dictum ut, ultricies
                            id urna. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia curae;
                            Praesent vestibulum bibendum eros in suscipit.
                            Quisque efficitur iaculis cursus. Aenean ut eleifend
                            nunc, quis feugiat ex. Fusce venenatis scelerisque
                            sem quis congue. Nullam ultrices purus eu orci tempor
                            vulputate. In odio libero, vehicula sit amet tincidunt
                            et, porta eget mi. Mauris scelerisque ut arcu a elementum.
                        </h2>
                    </div>
                    <div className={styles["column2"]}/>
                    <div className={styles["column3"]}>
                        <div className={styles["grid"]}>
                            {list_donates.map((donate, index) => {
                                return (
                                    <div key={index}>
                                        <DonateCard
                                            link={donate.link}
                                            alt={donate.name}
                                            image={donate.image}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
