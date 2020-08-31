import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";
import {ProfileType} from "../../../../redux/store";

export type ProfilePropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.item}>
                <div>
                    <img className={s.ava} src={props.profile.photos.large} alt="avatar"/>
                </div>
                <div className={s.description}>
                    <h2>{props.profile.fullName}</h2>
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        )
    }
}

export default ProfileInfo;