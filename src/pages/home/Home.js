import * as styles from './Home.module.scss';

import BackgroundSlider from 'react-background-slider'
import {home1, home2, home3, home4} from '../../assets/images/home/';

export default function HomePage() {

    return (
        <>
            <div className={styles["home-page-container"]}>
                <div className={styles["page"]}>
                    <div className={styles["content"]}>
                        <h1>We are the first generation to know we are destroying our planet <br/>
                            and the last one that can do anything about it.</h1>
                        <h2> 'WWF UK Chief Executive Tanya Steele'</h2>
                    </div>
                </div>
                <div className={styles["background"]}>
                    {/*loop background-images*/}
                    <BackgroundSlider
                        images={[home1, home2, home3, home4]}
                        duration={6}
                        transition={2}
                    />
                </div>
            </div>
        </>
    )
}


