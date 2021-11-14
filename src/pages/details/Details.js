import styles from "./Details.module.scss";
import arrow_right from '../../assets/images/icons/arrow_blue_right.png';

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

import {DisplayCategoryImage, DisplayCategoryName, DisplayHabitats, Spinner} from "../../components";
import Leftmenu from "../../components/leftmenu/Leftmenu";

import animal from "../../assets/images/animal.png"

//IUCN 2021. IUCN Red List of Threatened Species. Version 2021-2 <www.iucnredlist.org>

export default function DetailsPage() {

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [header, setHeader] = useState('');
    const [info, setInfo] = useState('');
    const [category, setCategory] = useState('');
    const [habitats, setHabitats] = useState('');
    const [threats, setThreats] = useState('');
    const [trades, setTrades] = useState('');
    const [conservations, setConservations] = useState('');

    const [open1, toggleOpen1] = useState(false)
    const [open2, toggleOpen2] = useState(false)
    const [open3, toggleOpen3] = useState(false)
    const [open4, toggleOpen4] = useState(false)
    const [open5, toggleOpen5] = useState(false)
    const [open6, toggleOpen6] = useState(false)
    const [open7, toggleOpen7] = useState(false)
    const [open8, toggleOpen8] = useState(false)

    let threat_name = '';

    useEffect(async () => {
        await fetchHeader();
        await fetchInfo();
        await fetchHabitats();
        await fetchThreats();
        await fetchConservations();
        setLoading(false);
    }, []);

    async function fetchHeader() {
        try {
            const result = await axios.get(`https://apiv3.iucnredlist.org/api/v3/species/id/${id}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setHeader(result.data.result[0]);
            setCategory(result.data.result[0].category);
        } catch (e) {
            console.log(e);
        }
        ;
    };

    async function fetchInfo() {
        try {
            const result = await axios.get(`https://apiv3.iucnredlist.org/api/v3/species/narrative/id/${id}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setInfo(result.data.result[0]);
        } catch (e) {
            console.log(e);
        }
        ;
    };

    async function fetchHabitats() {
        try {
            const result = await axios.get(`https://apiv3.iucnredlist.org/api/v3/habitats/species/id/${id}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setHabitats(result.data.result);
        } catch (e) {
            console.log(e);
        }
        ;
    };

    async function fetchThreats() {
        try {
            const result = await axios.get(`https://apiv3.iucnredlist.org/api/v3/threats/species/id/${id}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setThreats(result.data.result);
        } catch (e) {
            console.log(e);
        }
        ;
    };

    async function useAndTrade() {
        try {
            const result = await axios.get(`https://apiv3.iucnredlist.org/api/v3/usetrades/species/id/${id}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setTrades(result.data.result);
        } catch (e) {
            console.log(e);
        }
        ;
    };

    async function fetchConservations() {
        try {
            const result = await axios.get(`https://apiv3.iucnredlist.org/api/v3/measures/species/id/${id}?token=${process.env.REACT_APP_IUCN_KEY}`, {
                headers: {},
            });
            setConservations(result.data.result);
        } catch (e) {
            console.log(e);
        }
        ;
    };

    if (loading) {
        return <Spinner/>
    }

    const toggle1 = () => {
        return toggleOpen1(!open1)
    };
    const toggle2 = () => {
        return toggleOpen2(!open2)
    };
    const toggle3 = () => {
        return toggleOpen3(!open3)
    };
    const toggle4 = () => {
        return toggleOpen4(!open4)
    };
    const toggle5 = () => {
        return toggleOpen5(!open5)
    };
    const toggle6 = () => {
        return toggleOpen6(!open6)
    };
    const toggle7 = () => {
        return toggleOpen7(!open7)
    };
    const toggle8 = () => {
        return toggleOpen8(!open8)
    };

    return (
        <>
            <div className={styles["background-image"]}>
                <div className="bg_image"
                     style={{
                         backgroundImage: `url(${animal})`,
                         backgroundSize: "cover",
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         //marginTop: '-40px',
                         marginBottom: '-200px',
                         paddingBottom: '50px',
                         height: '110vh',
                         width: "100%",
                         position: 'fixed',
                         top: '0',
                         left: '0',
                         zIndex: -1
                     }}
                >
                </div>
                <div className={styles["details-page-container"]}>
                    <div className={styles["page"]}>
                        <div className={styles["leftmenu"]}>>
                            <Leftmenu/>
                        </div>
                        <div className={styles["page-content"]}>

                            {/*top-section*/}
                            <section id={'section1'} className={styles["overlay"]}>
                                <div className={styles["top"]}>
                                    <div className={styles["column"]}>
                                        <img src={animal} alt={'selected animal'} className={styles["top-image"]}/>
                                        <div className={styles["top-category"]}>
                                            {/*image iucn category*/}
                                            <DisplayCategoryImage
                                                category={category}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles["column1"]}>
                                        <div className={styles["text-container"]}>

                                            <h1>{header.main_common_name}</h1>
                                            <hr/>
                                            <h2>{header.scientific_name}</h2>
                                            <h3>POPULATION TREND:</h3>
                                            <h1>{header.population_trend}</h1>
                                            {/*<h3>NUMBER OF MATURE INDIVIDUALS:</h3>*/}
                                            {/*<h1>HC! - 6,647</h1>*/}
                                            <h3>HABITAT AND ECOLOGY</h3>
                                            {/*habitat listing*/}
                                            <DisplayHabitats
                                                inputArray={habitats}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*taxonomy-section*/}
                            <section id={'section2'} className={styles["overlay"]}>
                                <div className={styles["anchor"]}>
                                    <div className={styles["title"]}>
                                        <h1>TAXONOMY
                                            <hr/>
                                        </h1>
                                    </div>
                                    <div className={styles["headers"]}>
                                        <div className={styles["column"]}>
                                            <div>
                                                <h5>KINGDOM</h5>
                                                <h1>{header.kingdom}</h1>
                                            </div>
                                            <div>
                                                <h5>ORDER</h5>
                                                <h1>{header.order}</h1>
                                            </div>
                                        </div>
                                        <div className={styles["column"]}>
                                            <div>
                                                <h5>PHYLUM</h5>
                                                <h1>{header.phylum}</h1>
                                            </div>
                                            <div>
                                                <h5>FAMILY</h5>
                                                <h1>{header.family}</h1>
                                            </div>
                                        </div>
                                        <div className={styles["column"]}>
                                            <div>
                                                <h5>CLASS</h5>
                                                <h1>{header.class}</h1>
                                            </div>
                                            <div>
                                                <h5>GENUS</h5>
                                                <h1>{header.genus}</h1>
                                            </div>
                                        </div>
                                    </div>

                                    {info.taxonomicnotes == null ? (
                                        <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                    ) : (
                                        <div className={styles["content"]} onClick={toggle1}>
                                            <div className={styles["content-header"]}>
                                                <img src={arrow_right} alt='expand-arrow'
                                                     className={styles[open1 ? "arrow-right" : "arrow-right-active"]}/>
                                                <h3>TAXONOMY IN DETAIL</h3>
                                            </div>

                                            <div className={styles[open1 ? "content-text-open" : "content-text"]}>
                                                <h2 dangerouslySetInnerHTML={{__html: info.taxonomicnotes}}></h2>
                                                <img src={arrow_right} alt="expand-arrow" className={styles["arrow-up"]}
                                                     onClick={toggle1}/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                            {/*assesment-section*/}
                            <section id={'section3'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>ASSESMENT INFORMATION
                                        <hr/>
                                    </h1>
                                </div>
                                <div className={styles["headers"]}>
                                    <div className={styles["column"]}>
                                        <div>
                                            <h5>IUCN RED LIST CATEGORY AND CRITERIA</h5>
                                            {/*iucn category full description*/}
                                            <DisplayCategoryName
                                                category={category}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles["column"]}>
                                        <div>
                                            <h5>DATE ASSESMENT</h5>
                                            <h1>{header.assessment_date}</h1>
                                        </div>
                                    </div>
                                    <div className={styles["column"]}>
                                        <div>
                                            <h5>YEAR PUBLISHED</h5>
                                            <h1>{header.published_year}</h1>
                                        </div>
                                    </div>
                                </div>
                                {info.rationale == null ? (
                                    <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                ) : (
                                    <div className={styles["content"]} onClick={toggle2}>
                                        <div className={styles["content-header"]}>
                                            <img src={arrow_right} alt='expand-arrows'
                                                 className={styles[open2 ? "arrow-right" : "arrow-right-active"]}/>
                                            <h3>ASSESMENT INFORMATION IN DETAIL</h3>
                                        </div>
                                        <div className={styles[open2 ? "content-text-open" : "content-text"]}>
                                            <h2 dangerouslySetInnerHTML={{__html: info.rationale}}></h2>
                                            <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                 onClick={toggle2}/>
                                        </div>
                                    </div>
                                )}
                            </section>
                            {/*geographic-section*/}
                            <section id={'section4'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>GEOGRAPHIC RANGE
                                        <hr/>
                                    </h1>
                                </div>

                                <div className={styles["header"]}>
                                    <div className={styles["column1"]}>

                                    </div>
                                    <div className={styles["column2"]}>

                                        <div className={styles["text container"]}>

                                        </div>
                                    </div>
                                </div>
                                {info.geographicrange == null ? (
                                    <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                ) : (
                                    <div className={styles["content"]} onClick={toggle3}>
                                        <div className={styles["content-header"]}>
                                            <img src={arrow_right} alt='expand-arrow'
                                                 className={styles[open3 ? "arrow-right" : "arrow-right-active"]}/>
                                            <h3>GEOGRAPHIC RANGE INFORMATION IN DETAIL</h3>
                                        </div>
                                        <div className={styles[open3 ? "content-text-open" : "content-text"]}>
                                            <h2 dangerouslySetInnerHTML={{__html: info.geographicrange}}></h2>
                                            <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                 onClick={toggle3}/>
                                        </div>
                                    </div>
                                )}
                            </section>
                            {/*population-section*/}
                            <section id={'section5'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>POPULATOIN
                                        <hr/>
                                    </h1>
                                </div>
                                <div className={styles["headers"]}>
                                    <div className={styles["column"]}>
                                        <div>
                                            <h5>CURRENT POPULATION TREND:</h5>
                                            <h1>{header.population_trend}</h1>
                                        </div>
                                    </div>
                                    {/*<div className={styles["column"]}>*/}
                                    {/*    <div>*/}
                                    {/*        <h5>NUMBER OF MATURE INDIVIDUALS</h5>*/}
                                    {/*        <h1>{}</h1>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className={styles["column"]}>*/}
                                    {/*    <div>*/}
                                    {/*        <h5>CONTINUING DECLINING</h5>*/}
                                    {/*        <h1>{}</h1>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                {info.population == null ? (
                                    <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                ) : (
                                    <div className={styles["content"]} onClick={toggle4}>
                                        <div className={styles["content-header"]}>
                                            <img src={arrow_right} alt='expand-arrow'
                                                 className={styles[open4 ? "arrow-right" : "arrow-right-active"]}/>
                                            <h3>POPULATION INFORMATION IN DETAIL</h3>
                                        </div>

                                        <div className={styles[open4 ? "content-text-open" : "content-text"]}>
                                            <h2 dangerouslySetInnerHTML={{__html: info.population}}></h2>
                                            <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                 onClick={toggle4}/>
                                        </div>
                                    </div>
                                )}
                            </section>
                            {/*habitat-section*/}
                            <section id={'section6'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>HABITAT AND ECOLOGY
                                        <hr/>
                                    </h1>
                                </div>
                                <div className={styles["headers"]}>
                                    <div className={styles["columns"]}>
                                        {/*<div>*/}
                                        {/*    <h5>SYSTEM</h5>*/}
                                        {/*    <h1>{}</h1>*/}
                                        {/*</div>*/}
                                        <div>
                                            <h5>HABBITAT TYPE</h5>
                                        </div>
                                        {/*habitats listing*/}
                                        <DisplayHabitats
                                            inputArray={habitats}
                                        />
                                        {/*<div>*/}
                                        {/*    <h5>GENERATION LENGHT</h5>*/}
                                        {/*    <h1>{}</h1>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                {
                                    info.habitat == null ? (
                                        <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                    ) : (
                                        <div className={styles["content"]} onClick={toggle5}>
                                            <div className={styles["content-header"]}>
                                                <img src={arrow_right} alt='expand-arrow'
                                                     className={styles[open5 ? "arrow-right" : "arrow-right-active"]}/>
                                                <h3>HABBITAT INFORMATION IN DETAIL</h3>
                                            </div>

                                            <div className={styles[open5 ? "content-text-open" : "content-text"]}>
                                                <h2 dangerouslySetInnerHTML={{__html: info.habitat}}></h2>
                                                <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                     onClick={toggle5}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                            {/*threats-section*/}
                            <section id={'section7'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>THREATS
                                        <hr/>
                                    </h1>
                                </div>
                                <div className={styles["headers"]}>
                                    <div className={styles["columns"]}>

                                        {threats.map((threat) => {
                                            if (threat.code.startsWith(1)) {
                                                threat_name = 'RESIDENTIAL & COMMERCIAL DEVELOPMENT';
                                            }
                                            if (threat.code.startsWith(2)) {
                                                threat_name = 'AGRICULTURE & AQUACULTURE';
                                            }
                                            if (threat.code.startsWith(3)) {
                                                threat_name = 'ENERGY PRODUCTION & MINING';
                                            }
                                            if (threat.code.startsWith(4)) {
                                                threat_name = 'TRANSPORTATION & SERVICE CORRIDORS';
                                            }
                                            if (threat.code.startsWith(5)) {
                                                threat_name = 'BIOLOGICAL RESOURCE USE';
                                            }
                                            if (threat.code.startsWith(6)) {
                                                threat_name = 'HUMAN INTRUSIONS & DISTURBANCE';
                                            }
                                            if (threat.code.startsWith(7)) {
                                                threat_name = 'NATURAL SYSTEM MODIFICATIONS';
                                            }
                                            if (threat.code.startsWith(8)) {
                                                threat_name = 'INVASIVE AND OTHER PROBLEMATIC SPECIES, GENES & DISEASES';
                                            }
                                            if (threat.code.startsWith(9)) {
                                                threat_name = 'POLUTION';
                                            }
                                            if (threat.code.startsWith(10)) {
                                                threat_name = 'GEOLOGICAL EVENTS';
                                            }
                                            if (threat.code.startsWith(11)) {
                                                threat_name = 'CLIMATE CHANGE & SEVERE WEATHER';
                                            }
                                            if (threat.code.startsWith(12)) {
                                                threat_name = 'OTHER OPTION';
                                            }
                                            return (
                                                <>
                                                    <h5>{threat_name}</h5>
                                                    <h3 key={threat.code}>⚆ {threat.title}</h3>
                                                </>
                                            )
                                        })
                                        }

                                        {/*1. Residential & commercial development (19268)*/}
                                        {/*2. Agriculture & aquaculture (38277)*/}
                                        {/*3. Energy production & mining (10674)*/}
                                        {/*4. Transportation & service corridors (5823)*/}
                                        {/*5. Biological resource use (37121)*/}
                                        {/*6. Human intrusions & disturbance (5350)*/}
                                        {/*7. Natural system modifications (19545)*/}
                                        {/*8. Invasive and other problematic species, genes & diseases (13794)*/}
                                        {/*9. Pollution (12616)*/}
                                        {/*10. Geological events (996)*/}
                                        {/*11. Climate change & severe weather (10967)*/}
                                        {/*12. Other options (504)*/}
                                    </div>
                                </div>
                                {info.threats == null ? (
                                    <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                ) : (
                                    <div className={styles["content"]} onClick={toggle6}>
                                        <div className={styles["content-header"]}>
                                            <img src={arrow_right} alt='expand-arrow'
                                                 className={styles[open6 ? "arrow-right" : "arrow-right-active"]}/>
                                            <h3>THREATS INFORMATION IN DETAIL</h3>
                                        </div>

                                        <div className={styles[open6 ? "content-text-open" : "content-text"]}>
                                            <h2 dangerouslySetInnerHTML={{__html: info.threats}}></h2>
                                            <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                 onClick={toggle6}/>
                                        </div>
                                    </div>
                                )}
                            </section>
                            {/*trade-section*/}
                            <section id={'section8'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>USE AND TRADE
                                        <hr/>
                                    </h1>
                                </div>
                                <div className={styles["headers"]}>
                                    <div className={styles["columns"]}>
                                        {/*1. Food - human (13103)*/}
                                        {/*2. Food - animal (1465)*/}
                                        {/*3. Medicine - human & veterinary (3976)*/}
                                        {/*4. Poisons (162)*/}
                                        {/*5. Manufacturing chemicals (181)*/}
                                        {/*6. Other chemicals (409)*/}
                                        {/*7. Fuels (1632)*/}
                                        {/*8. Fibre (410)*/}
                                        {/*9. Construction or structural materials (4033)*/}
                                        {/*10. Wearing apparel, accessories (544)*/}
                                        {/*11. Other household goods (1494)*/}
                                        {/*12. Handicrafts, jewellery, etc. (1476)*/}
                                        {/*13. Pets/display animals, horticulture (14796)*/}
                                        {/*14. Research (847)*/}
                                        {/*15. Sport hunting/specimen collecting (2082)*/}
                                        {/*16. Establishing ex-situ production * (1207)*/}
                                        {/*17. Other (free text) (1423)*/}
                                        {/*18. Unknown (882)*/}

                                    </div>


                                </div>
                                {info.usetrade == null ? (
                                    <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                ) : (
                                    <div className={styles["content"]} onClick={toggle7}>
                                        <div className={styles["content-header"]}>
                                            <img src={arrow_right} alt='expand-arrow'
                                                 className={styles[open7 ? "arrow-right" : "arrow-right-active"]}/>
                                            <h3>USE AND TRADE INFORMATION IN DETAIL</h3>
                                        </div>

                                        <div className={styles[open7 ? "content-text-open" : "content-text"]}>
                                            <h2 dangerouslySetInnerHTML={{__html: info.usetrade}}></h2>
                                            <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                 onClick={toggle7}/>
                                        </div>
                                    </div>
                                )}
                            </section>
                            {/*conservation-section*/}
                            <section id={'section9'} className={styles["overlay"]}>
                                <div className={styles["title"]}>
                                    <h1>CONSERVATION ACTIONS
                                        <hr/>
                                    </h1>
                                </div>
                                <div className={styles["headers"]}>
                                    <div className={styles["columns"]}>

                                        {conservations.map((conservation) => {
                                            return (
                                                <h3 key={conservation.code}>{conservation.code}, {conservation.title}</h3>
                                            )
                                        })
                                        }

                                        {/*1. Land/water protection (1)*/}
                                        {/*2. Land/water management (1)*/}
                                        {/*3. Species management (1)*/}
                                        {/*4. Education & awareness (1)*/}
                                        {/*5. Law & policy (1)*/}
                                        {/*6. Livelihood, economic & other incentives (1)*/}
                                    </div>
                                </div>
                                {info.conservationmeasures == null ? (
                                    <h3 className={styles["no"]}>NO DETAILED INFORMATION AVAILABLE.</h3>
                                ) : (
                                    <div className={styles["content"]} onClick={toggle8}>
                                        <div className={styles["content-header"]}>
                                            <img src={arrow_right} alt='expand-arrow'
                                                 className={styles[open8 ? "arrow-right" : "arrow-right-active"]}/>
                                            <h3>CONSERVATION INFORMATION IN DETAIL</h3>
                                        </div>

                                        <div className={styles[open8 ? "content-text-open" : "content-text"]}>

                                            <h2 dangerouslySetInnerHTML={{__html: info.conservationmeasures}}></h2>
                                            <img src={arrow_right} alt='expand-arrow' className={styles["arrow-up"]}
                                                 onClick={toggle8}/>
                                        </div>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
