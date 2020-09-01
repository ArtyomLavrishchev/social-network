import React from "react";
import preloader from "../../../assets/images/loader.svg";

type PreloaderType = {}

const Preloader = (props: PreloaderType) => {
    return <div>
        <img src={preloader} alt={'preloader'}/>
    </div>
}
export default Preloader;