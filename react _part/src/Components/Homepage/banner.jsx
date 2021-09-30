import React from 'react';
import styles from './banner.module.css';
import { Parallax } from 'react-parallax';

const back = "https://cdn.pixabay.com/photo/2020/02/02/19/55/cars-4814015_960_720.jpg";

document.body.style.textAlign = "center";


function banner() {
    return (

        <Parallax
            bgImage={back} strength={450}
        >
            <div className={styles.bg_container}>
                <p className={styles.bg_p}> "Wherever you are, you can get some help" </p>
            </div>

        </Parallax>
    )
}

export default banner;
