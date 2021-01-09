import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/store";
import Preloader from "../../../Common/Preloader/Preloader";
import userPhoto from "../../../../assets/images/user-profile-icon-png.png"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    if (!profile) {
        return <Preloader/>
    }
    return <div className={s.item}>
        <div>
            <img className={s.ava} src={profile.photos.large ? profile.photos.large : userPhoto}
                 alt="avatar"/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <ProfileData profile={profile}/>
    </div>
}

const ProfileData: React.FC<{ profile: ProfileType }> = ({profile}) => {
    return <div>
        {profile &&
        <div>
            <div>
                <h2>{profile.fullName}</h2>
            </div>
            <div>
                <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
        }
    </div>
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue &&
            <div>
                <b>{contactTitle}: </b> {contactValue}
            </div>
            }
        </div>
    )
}
type ContactType = {
    contactTitle: string
    contactValue: string
}

export default ProfileInfo;