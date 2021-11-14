import styles from './Leftmenu.module.scss';
import {HashLink as Link} from "react-router-hash-link";
import {s1, s2, s3, s4, s5, s6, s7, s8, s9} from "../../assets/images/leftmenu";

export default function Leftmenu() {

    return (
        <>
            <section className={styles["leftmenu"]}>

                <div className={styles["menu-item"]}>

                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section2'}><img src={s2} alt="taxonomy"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>TAXONOMY</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section3'}><img src={s3} alt="assessment"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>ASSESSMENT INFO</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section4'}><img src={s4} alt="geographic"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>GEOGRAPHIC RANGE</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section5'}><img src={s5} alt="population"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>POPULATION</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section6'}><img src={s6} alt="habitat"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>HABITAT & ECOLOGY</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section7'}><img src={s7} alt="threats"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>THREATS</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section8'}><img src={s8} alt="trade"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>USE AND TRADE</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section9'}><img src={s9} alt="conservation"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>CONSERVATION ACTIONS</h2>
                    </div>
                </div>
                <div className={styles["menu-item"]}>
                    <div className={styles["button-icon"]}>
                        <Link to={'details/#section1'}><img src={s1} alt="top"/></Link>
                    </div>
                    <div className={styles["button-text"]}>
                        <h2>BACK TO THE TOP</h2>
                    </div>
                </div>
            </section>
        </>
    )
}
