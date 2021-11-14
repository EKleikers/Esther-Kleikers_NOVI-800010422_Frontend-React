import styles from "./Bluebird.module.scss";
import bird from '../../assets/images/bird.png';

import React from 'react';

import {PartnerCard} from "../../components/cards";
import {list_partners} from '../../data/';

export default function BluebirdPage() {

    return (
        <>
            <div className={styles["bluebird-page-container"]}>
                <div className={styles["bg_image"]}>
                    <div className="bg_image"
                         style={{
                             backgroundImage: `url(${bird})`,
                             backgroundSize: "cover",
                             height: "220vh",
                             width: "100%",
                             //marginLeft: '-20%',
                         }}
                    >
                    </div>
                    <div className={styles["page"]}>
                        <h1 className={styles["bluebird-text"]}>LOREMIPSUM</h1>
                        <br/>
                        <h2 className={styles["text"]}>
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
                        </h2>
                    </div>
                    <div className={styles["partners-container"]}>
                        <h2 className={styles["partners-text"]}>OUR PARTNERS</h2>
                        <div className={styles["partners-grid"]}>
                            {list_partners.map((partner, index) => {
                                return (
                                    <div key={index}>
                                        <PartnerCard
                                            link={partner.link}
                                            alt={partner.name}
                                            image={partner.image}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
