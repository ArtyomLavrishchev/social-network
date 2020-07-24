import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.item}>
        <div>
            {/*<img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>*/}
        </div>
        <div>
            <img className={s.ava} src="https://pp.userapi.com/c836122/v836122008/21c67/Y7IEYj7QrEo.jpg"/>
        </div>
            <div className={s.descr}>
                Description
            </div>
        </div>
    )
}

export default ProfileInfo;