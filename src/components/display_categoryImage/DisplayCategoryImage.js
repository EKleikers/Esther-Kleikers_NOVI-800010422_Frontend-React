import styles from './DisplayCategoryImage.module.scss';
import {CR, DD, EN, EW, EX, LC, NT, VU} from "../../assets/images/category";

export default function DisplayCategoryImage({category, children}) {

    switch (category) {
        case 'EW':
            return (
                <img
                    src={EW}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'EX':
            return (
                <img
                    src={EX}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'CR':
            return (
                <img
                    src={CR}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'EN':
            return (
                <img
                    src={EN}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'VU':
            return (
                <img
                    src={VU}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            );
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
        case 'LR/nt':
            return (
                <img
                    src={NT}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'LC':
            return (
                <img
                    src={LC}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'LR/lc':
            return (
                <img
                    src={LC}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'DD':
            return (
                <img
                    src={DD}
                    alt="iucn-category"
                    className={styles["image-category"]}
                />
            )
        case 'NA':
            return (
                <p>
                    No iucn category indication
                </p>
            )
        default:
            ;
    }
}

