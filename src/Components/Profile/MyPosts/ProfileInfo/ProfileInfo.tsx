import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/store";
import Preloader from "../../../Common/Preloader/Preloader";
import userPhoto from "../../../../assets/images/user-profile-icon-png.png"

export type ProfilePropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfilePropsType) => {
    if(props.profile) {
        return <div className={s.item}>
            <div>
                <img className={s.ava} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="avatar"/>
            </div>
            <div className={s.description}>
                <h2>{props.profile.fullName}</h2>
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    }
    else {
        return <Preloader/>
    }
}

export default ProfileInfo;