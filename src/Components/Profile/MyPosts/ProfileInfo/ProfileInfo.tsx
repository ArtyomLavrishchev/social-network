import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/store";
import Preloader from "../../../Common/Preloader/Preloader";
import userPhoto from "../../../../assets/images/user-profile-icon-png.png"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    if (profile) {
        return <div className={s.item}>
            <div>
                <img className={s.ava} src={profile.photos.large ? profile.photos.large : userPhoto}
                     alt="avatar"/>
            </div>
            <div className={s.fullName}>
                <h2>{profile.fullName}</h2>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                {profile.lookingForAJobDescription}
            </div>
        </div>
    } else {
        return <Preloader/>
    }
}

export default ProfileInfo;