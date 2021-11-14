import React, {useState} from 'react';
import styles from './CategoryImage.module.css';
//import {s1, s2, s3, s4, s5, s6, s7, s8, s9} from "./../../assets/leftmenu";
import {CR, DD, EN, EW, EX, LC, NT, VU} from "./../../assets/category";

export default function CategoryImage({category, children}) {

    switch (category) {
        case 'EW':
            return (
                <img
                    src={EW}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'EX':
            return (
                <img
                    src={EX}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'CR':
            return (
                <img
                    src={CR}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'EN':
            return (
                <img
                    src={EN}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'VU':
            return (
                <img
                    src={VU}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            );
            break;
        // case 'LR/cd':
        //      return(
        //                 <img
        //                     src={LR}
        //                     alt="iucn-category"
        //                     className={styles["image-category"]}
        //                 />
        //             )
        case 'NT':
            return (
                <img
                    src={NT}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'LR/nt':
            return (
                <img
                    src={NT}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'LC':
            return (
                <img
                    src={LC}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'LR/lc':
            return (
                <img
                    src={LC}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'DD':
            return (
                <img
                    src={DD}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
            break;
        case 'NA':
            return (
                <p>
                    No iucn category indication
                </p>
            )
            break;
        default:
            ;
    }
}

