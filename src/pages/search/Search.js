import styles from "./Search.module.scss";
import {useDarkTheme} from '../../hooks'

import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import {list_categories} from "../../data";
import Select from "../../components/select/Select";
import {useHistory} from "react-router-dom";

import {BlueButton, Input} from "../../components";

export default function SearchPage({setSearch, setSearchValue}) {
    useDarkTheme()
    const {handleSubmit, register, formState: {errors}} = useForm({mode: 'all',});
    const history = useHistory();
    ;
    const [countries, setCountries] = useState({});
    const [regions, setRegions] = useState({});

    const onFormSubmit = (e) => {
        if (e.find !== '') {
            setSearch('name');
            setSearchValue(e.find);
        }
        if (e.category !== '') {
            setSearch('category');
            setSearchValue(e.category);
        }
        // if(e.threats !== ''){
        // setSearch('threat');
        // setSearchValue(e.threats);
        // }
        // if(e.habitats !== ''){
        // setSearch('habitat');
        // setSearchValue('e.habitats);
        // }
        // if(e.marines !== ''){
        // setSearch('marine');
        // setSearchValue(e.marines);
        // }
        if (e.region !== '') {
            setSearch('region');
            setSearchValue(e.region);
        }
        if (e.countries !== '') {
            setSearch('country');
            setSearchValue(e.countries);
        }
        //pass search and searchValue to results page
        history.push('/results');
    }


//get list of land regions
    useEffect(() => {
        async function fetchRegions() {
            try {
                const result = await
                    axios.get(`https://apiv3.iucnredlist.org/api/v3/region/list?token=${process.env.REACT_APP_IUCN_KEY}`);
                setRegions(result.data)
            } catch (e) {
                console.error(e)
                //foutmelding
            }
        };
        fetchRegions();
    }, []);

//get list of countries
    useEffect(() => {
        async function fetchCountries() {
            try {
                const result = await
                    axios.get(`https://apiv3.iucnredlist.org/api/v3/country/list?token=${process.env.REACT_APP_IUCN_KEY}`);
                setCountries(result.data)
            } catch (e) {
                console.error(e)
            }
        };
        // if() {
        fetchCountries();
        // }
    }, []);

//other data to "fill" dropdowns is not available in the API
//this data will be retrieved from .json files in directory data/search

    return (
        <>
            <div className={styles["page-container"]}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className={styles["page"]}>
                        <div className={styles["column1"]}>
                            <h2 className={styles["fill-width"]}>Lorem ipsum dolor sit amet. Sit ratione laborum aut
                                temporibus natus nam tenetur magnam.
                                Et
                                eligendi perspiciatis non deserunt sunt qui autem nulla quo.
                                Lorem ipsum dolor sit amet. Sit ratione laborum aut temporibus natus nam tenetur magnam.
                                Et
                                eligendi perspiciatis non deserunt sunt qui autem nulla quo.
                                Lorem ipsum dolor sit amet. Sit ratione laborum aut temporibus natus nam tenetur magnam.
                                Et
                                eligendi perspiciatis non deserunt sunt qui autem nulla quo.
                                Lorem ipsum dolor sit amet. Sit ratione laborum aut temporibus natus nam tenetur magnam.
                                Et
                                eligendi perspiciatis non deserunt sunt qui autem nulla quo.
                                Lorem ipsum dolor sit amet. Sit ratione laborum aut temporibus natus nam tenetur magnam.
                                Et
                                eligendi perspiciatis non deserunt sunt qui autem nulla quo.
                                Lorem ipsum dolor sit amet. Sit ratione laborum aut temporibus natus nam tenetur magnam.
                                Et
                                eligendi perspiciatis non deserunt sunt qui autem nulla quo.</h2>
                        </div>
                        <div className={styles["column2"]} />
                        < div className={styles["column3"]}>
                            <div className={styles["buttons-container"]}>
                                <div className={styles["input-search"]}>
                                    {/*searchfield*/}
                                    <Input
                                        input_type="text"
                                        placeholder="Latin Name"
                                        register_name="find"
                                        register={register}
                                        input_id="find"
                                        errors={errors}
                                    >
                                        Select by Name:
                                    </Input>

                                </div>
                                <div className={styles["select-container"]}>
                                    <label className={styles["select-label"]}>Red List Category:</label>
                                    {/*select category*/}
                                    <Select
                                        input_name="category"
                                        register_name="category"
                                        register={register}
                                        input_id="category"
                                    >
                                        <option key='' value=''>All</option>
                                        {list_categories.map(category => {
                                            return (
                                                <option key={category.identifier}
                                                        value={category.identifier}>{category.name}</option>
                                            )
                                        })
                                        }}
                                    </Select>
                                </div>
                                {/*select region*/}
                                <div className={styles["select-container"]}>
                                    <label className={styles["select-label"]}> Land Region:</label>
                                    <Select
                                        input_name="region"
                                        register_name="region"
                                        register={register}
                                        input_id="region"
                                    >
                                        <option key='' value=''>All</option>
                                        {Object.keys(regions).length > 0 &&
                                        regions.results.map(region => {
                                            return (
                                                <option
                                                    key={region.identifier}
                                                    value={region.identifier}
                                                >
                                                    {region.name}
                                                </option>
                                            )
                                        })
                                        }
                                        Land Regions:
                                    </Select>
                                </div>
                                {/*select country*/}
                                <div className={styles["select-container"]}>
                                    <label className={styles["select-label"]}> Country:</label>

                                    <Select
                                        input_name="countries"
                                        register_name="countries"
                                        register={register}
                                        input_id="countries"
                                    >
                                        <option key='' value=''>All</option>
                                        {Object.keys(countries).length > 0 &&
                                        countries.results.map(country => {
                                            return (
                                                <option
                                                    key={country.isocode}
                                                    value={country.isocode}
                                                >
                                                    {country.country}
                                                </option>
                                            )
                                        })
                                        }
                                        Countries:
                                    </Select>
                                </div>
                            </div>
                            <div className={styles["submit"]}>
                                <BlueButton>SEARCH</BlueButton>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}


