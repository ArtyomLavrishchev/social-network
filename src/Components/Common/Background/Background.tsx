import React from 'react';
import styles from "./Background.module.css";
import Particles from "react-particles-js";

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        }
    }
};

const Background = () => {
    return (
        <Particles className={styles.particles} params={particlesOpt}/>
    );
};

export default Background;