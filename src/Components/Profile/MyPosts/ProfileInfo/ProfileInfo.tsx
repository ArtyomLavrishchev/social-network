import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.item}>
            <div>
                <img className={s.ava} src="https://pp.userapi.com/c836122/v836122008/21c67/Y7IEYj7QrEo.jpg" alt="avatar"/>
            </div>
            <div className={s.description}>
                Description
            </div>
        </div>
    )
}

export default ProfileInfo;