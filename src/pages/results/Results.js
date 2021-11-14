import styles from "./Results.module.scss";
import {useDarkTheme} from '../../hooks'
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {BlueButton, Spinner} from "../../components";
import {ResultCard} from "../../components/cards"
import animal from "../../assets/images/animal.png"

export default function ResultsPage({search, searchValue}) {

    useDarkTheme();
    const history = useHistory();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState('');
    const [info, setInfo] = useState([]);
    const [id, setId] = useState('');

    let endpoint = ''; //setEndpoint within useEffect not working
    const axios = require('axios');
    let taxonid = [];

    useEffect(() => {

        async function getResults() {

            if (search === 'country') {
                endpoint = `country/getspecies/${searchValue}`;
            }
            ;
            if (search === 'region') {
                endpoint = `species/region/${searchValue}/page/0`;  ////api/v3/species/region/:region_identifier/page/:page_number?token='YOUR TOKEN'
            }
            ;
            if (search === 'category') {
                endpoint = `species/category/${searchValue}`;   ///api/v3/species/category/category?token='YOUR TOKEN'
            }
            ;
            if (search === 'name') {
                endpoint = `species/${searchValue}`;
            }
            ;

            try {
                const response = await axios.get(`https://apiv3.iucnredlist.org/api/v3/${endpoint}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                    headers: {},
                });
                setData(response.data);

                if (search === 'region') {
                    response.data.result.slice(0, 9).map((animal) => {
                        setInfo(info => [...info, animal])
                        return animal;
                    })
                } else {
                    response.data.result.map((item) => {

                        taxonid.push(item.taxonid);
                        return item;
                    })
                    const shuffled = taxonid.sort(() => 0.5 - Math.random());
                    shuffled.slice(0, 9).map((animal) => {
                        getMoreInfo(animal)
                        return animal;
                    })
                }
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
            ;
        };
        getResults();
    }, []);


    //get detailed info
    async function getMoreInfo(animal) {
        try {
            const response = await axios.get(`https://apiv3.iucnredlist.org/api/v3/species/id/${animal}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setInfo(info => [...info, response.data.result[0]])
            //return response;
        } catch (e) {
            console.error(e)
            //foutmelding
        }
    };

    //show more (random) items
    const shuffle = () => {
        data.result.map((item) => {
            taxonid.push(item.taxonid);
            //return item;
        })
        const shuffled = taxonid.sort(() => 0.5 - Math.random());
        shuffled.slice(0, 9).map((animal,) => {
            getMoreInfo(animal)
            //return animal;
        })
    }

    if (loading) {
        return (
            <Spinner/>
        )
    }

    //pass id selected animal to details page
    const itemSelect = (id) => {
        setId(id);
        history.push(`/details/${id}`);
    }

    if (!info.length) {
        return (
            <div className={styles["noSelection"]}>
                <h1>NO DATA SELECTED</h1>
                <h3>Please try again with another search criteria!</h3>
            </div>
        )
    } else {

        if (search === 'region') {
            return (
                <>
                    <div className={styles["page-container-region"]}>
                        <div className={styles["page"]}>
                            <div className={styles["results-grid"]}>
                                {Object.keys(info).length > 0 &&
                                info?.map((item) => {
                                    return (
                                        <>
                                            <ResultCard
                                                image={animal}
                                                key={item.taxonid}
                                                onClick={() => itemSelect(item.taxonid)}
                                                kingdom={item.kingdom_name}
                                                king_class={item.class_name}
                                                name_en={item.scientific_name}
                                                category={item.category}
                                                population={item.population}
                                            >
                                            </ResultCard>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (search === 'name') {
            return (
                <>
                    <div className={styles["page-container-name"]}>
                        <div className={styles["page-name"]}>
                            <div className={styles["results-grid"]}>
                                {Object.keys(info).length > 0 &&
                                info?.map((item) => {
                                    return (
                                        <>
                                            <ResultCard
                                                image={animal}
                                                key={item.taxonid}
                                                onClick={() => itemSelect(item.taxonid)}
                                                kingdom={item.kingdom}
                                                king_class={item.class}
                                                name_en={item.main_common_name}
                                                name_lt={item.scientific_name}
                                                category={item.category}
                                                population={item.population_trend}
                                            >
                                            </ResultCard>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className={styles["page-container"]}>
                        <div className={styles["page"]}>
                            <div className={styles["results-grid"]}>
                                {Object.keys(info).length > 0 &&
                                info?.map((item) => {
                                    return (
                                        <>
                                            <ResultCard
                                                image={animal}
                                                key={item.taxonid}
                                                onClick={() => itemSelect(item.taxonid)}
                                                kingdom={item.kingdom}
                                                king_class={item.class}
                                                name_en={item.main_common_name}
                                                name_lt={item.scientific_name}
                                                category={item.category}
                                                population={item.population_trend}
                                            >
                                            </ResultCard>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className={styles["bluebutton-container"]}>
                            <div className={styles["bluebutton"]}>
                                <BlueButton clickHandler={shuffle}>SHOW MORE</BlueButton>
                            </div>
                        </div>
                    </div>
                    }
                </>
            )
        }
    }
}
