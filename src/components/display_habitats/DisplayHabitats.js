import React, {useState} from 'react';
import styles from './HabitatsList.module.css';


export default function HabitatsList({inputArray, children}) {

    let numbers = [];
    let habitatsArray = [];

    return (
        <>
            <div className={styles["habitats_list"]}>
            {
                inputArray.map((habitat) => {
                        numbers.push(parseInt(habitat.code))
                })
            }
            {habitatsArray = (Array.from(new Set(numbers)))}

            {
                habitatsArray.map((habitat) => {
                    {
                        if (habitat === 1) {
                            return (
                                <p className={styles["habitat"]}>Forest</p>
                            )
                        }
                        if (habitat === 2) {
                            return (
                                <p className={styles["habitat"]}>Savanna</p>
                            )
                        }
                        if (habitat === 3) {
                            return (
                                <p className={styles["habitat"]}>Shrubland</p>
                            )
                        }
                        if (habitat === 4) {
                            return (
                                <p className={styles["habitat"]}>Grassland</p>
                            )
                        }
                        if (habitat === 5) {
                            return (
                                <p className={styles["habitat"]}>Wetlands</p>
                            )
                        }
                        if (habitat === 6) {
                            return (
                                <p className={styles["habitat"]}>Rocky area's</p>
                            )
                        }
                        if (habitat === 7) {
                            return (
                                <p className={styles["habitat"]}>Caves and Subterranean
                                    Habitats</p>
                            )
                        }
                        if (habitat === 8) {
                            return (
                                <p className={styles["habitat"]}>Desert</p>
                            )
                        }
                        if (habitat === 9) {
                            return (
                                <p className={styles["habitat"]}>Marine Neritic</p>
                            )
                        }
                        if (habitat === 10) {
                            return (
                                <p className={styles["habitat"]}>Marine Oceanic</p>
                            )
                        }
                        if (habitat === 11) {
                            return (
                                <p className={styles["habitat"]}>Marine Deep Benthic</p>
                            )
                        }
                        if (habitat === 12) {
                            return (
                                <p className={styles["habitat"]}>Marine Intertidal</p>
                            )
                        }
                        if (habitat === 113) {
                            return (
                                <p className={styles["habitat"]}>Marine
                                    Coastal/Supratidal</p>
                            )
                        }
                        if (habitat === 14) {
                            return (
                                <p className={styles["habitat"]}>Artificial/Terrestrial</p>
                            )
                        }
                        if (habitat === 15) {
                            return (
                                <p className={styles["habitat"]}>Artificial/Aquatic &
                                    Marine</p>
                            )
                        }
                        if (habitat === 16) {
                            return (
                                <p className={styles["habitat"]}>Introduced vegetation</p>
                            )
                        }
                        if (habitat === 17) {
                            return (
                                <p className={styles["habitat"]}>Other</p>
                            )
                        }
                        if (habitat === 18) {
                            return (
                                <p className={styles["habitat"]}>Unknown</p>
                            )
                        }
                    }
                })
            }
            </div>
        </>
    )
}
