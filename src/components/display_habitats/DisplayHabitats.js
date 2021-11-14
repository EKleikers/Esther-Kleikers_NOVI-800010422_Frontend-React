import styles from './DisplayHabitats.module.scss';

export default function DisplayHabitats({inputArray, children}) {

    let numbers = [];
    let habitatsArray = [];
    let habitat_name = '';

    return (
        <>
            <div className={styles["habitats_list"]}>
                {
                    inputArray.map((habitat) => {
                        return numbers.push(parseInt((habitat.code, habitat.code)))
                    })
                }
                {habitatsArray = (Array.from(new Set(numbers)))}
                {
                    habitatsArray.map((habitat) => {
                        if (habitat === 1) {
                            habitat_name = 'Forest';
                        }
                        if (habitat === 2) {
                            habitat_name = 'Savanna';
                        }
                        if (habitat === 3) {
                            habitat_name = 'Shrubland';
                        }
                        if (habitat === 4) {
                            habitat_name = 'Grassland';
                        }
                        if (habitat === 5) {
                            habitat_name = 'Wetlands';
                        }
                        if (habitat === 6) {
                            habitat_name = "Rocky area's";
                        }
                        if (habitat === 7) {
                            habitat_name = 'Caves and Subterranean Habitats';
                        }
                        if (habitat === 8) {
                            habitat_name = 'Desert';
                        }
                        if (habitat === 9) {
                            habitat_name = 'Marine Neritic';
                        }
                        if (habitat === 10) {
                            habitat_name = 'Marine Oceanic';
                        }
                        if (habitat === 11) {
                            habitat_name = 'Marine Deep Benthic';
                        }
                        if (habitat === 12) {
                            habitat_name = 'Marine Intertidal';
                        }
                        if (habitat === 113) {
                            habitat_name = 'Marine Coastal/Supratidal';
                        }
                        if (habitat === 14) {
                            habitat_name =
                                habitat_name = 'Artificial/Terrestrial';
                        }
                        if (habitat === 15) {
                            habitat_name =
                                habitat_name = 'Artificial/Aquatic &Marine';
                        }
                        if (habitat === 16) {
                            habitat_name = 'Introduced vegetation';
                        }
                        if (habitat === 17) {
                            habitat_name = 'Other';
                        }
                        if (habitat === 18) {
                            habitat_name = 'Unknown';
                        }

                        return (
                            <h1 key={habitat} className={styles["habitat"]}>{habitat_name}</h1>
                        )
                    })
                }
            </div>
        </>
    )
}
