import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from ".//Search.module.css";
import Select from "../../components/select/Select";
import axios from 'axios';
import {useDarkTheme} from '../../hooks'
import {Link} from "react-router-dom";
import home1 from "../../assets/home1.png";
import worldmap from "../../assets/worldmap.png"
import overlay from "../../assets/worldmap_overlay.png"
import {list_users, list_countries, list_regions} from "../../data"
import {Map, Signup} from "../../popups";

// API gebruiken
// process.env.REACT_APP_IUCN_KEY
// process.env.REACT_APP_FIREBASE_KEY

export default function SearchPage() {
    const [mapOpen, setMapOpen] = useState(false);
    useDarkTheme()
    const {handleSubmit, register, formState: {errors}, watch, reset} = useForm({mode: 'all',});


    const [regions, setRegions] = useState({});

    //get list of land regions
    useEffect(() => {
        async function fetchRegions() {
            try {
                const result = await
                    axios.get(`https://apiv3.iucnredlist.org/api/v3/region/list?token=${process.env.REACT_APP_IUCN_KEY}`);
                console.log("regions", result.data.results)
                setRegions(result.data)
            } catch (e) {
                console.error(e)
                //foutmelding
            }
        };
        // if() {
        fetchRegions();
        // }
    }, []);

    return (
        <>
            <div>
                {Object.keys(regions).length > 0 &&

                regions.results.map((region) => {

                    return (
                        <div>{region.name}</div>
                    )
                })
                }

            </div>
        </>
    )
}
