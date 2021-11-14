import React from 'react';
import styles from './Result.module.scss';

import up from '../../../assets/images/icons/arrow-up.png';
import down from '../../../assets/images/icons/arrow-down.png';
import line from '../../../assets/images/icons/line-green.png';
import question from '../../../assets/images/icons/question.png';
import cheetah from "../../../assets/images/animal.png";

export default function Result({children, onClick, kingdom, king_class, name_en, name_lt, category, population, image}) {


    return (
        <>
            <section className={styles["section-container"]}
                     onClick={onClick}
            >
                <div className={styles["card-container"]}>
                    <img src={image} alt={cheetah} className={styles["card-image"]}/>
                    <div className={styles["card-text"]}>
                        <div className={styles["column"]}>
                            <h3>{kingdom} - {king_class}</h3>
                            <h1>{name_en}</h1>
                            <h2>{name_lt}</h2>

                            <div className={styles["row"]}>

                                <div className={styles["population"]}>

                                    {population === 'Increasing' &&
                                        <img className={styles["population-image"]} src={up} alt='increase'></img>
                                    }
                                    {population === 'Decreasing' &&
                                        <img className={styles["population-image"]} src={down} alt='decrease'></img>
                                    }
                                    {population === 'Stable' &&
                                        <img className={styles["population-image"]} src={line} alt='stable'></img>
                                    }
                                    {population === 'Unknown' &&
                                        <img className={styles["population-image"]} src={question} alt='unknown'></img>
                                    }
                                </div>

                                <div className={styles["trend"]}>
                                    <h2>{population}</h2>
                                </div>

                                <div className={styles["category"]}>
                                    <div className={styles["circle"]}>
                                        <p className={styles["circle-text"]}>{category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
