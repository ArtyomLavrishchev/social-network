import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/store";
import Preloader from "../../../Common/Preloader/Preloader";
import userPhoto from "../../../../assets/images/user-profile-icon-png.png"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataForm, ProfileDataFormRedux, ProfileFormDataType} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: any
}

const ProfileInfo: React.FC<ProfilePropsType> = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
        saveProfile
    }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const goToEditMode = () => setEditMode(true)
    const onSubmit = (fomData: ProfileFormDataType) => {
        saveProfile(fomData).then(() => {
            setEditMode(false)
        })
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    if (!profile) return <Preloader/>;
    return (
        <div className={s.item}>
            <div>
                <img className={s.ava} src={profile.photos.large ? profile.photos.large : userPhoto} alt="avatar"/>
                <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode ? <ProfileDataFormRedux profile={profile} initialValues={profile} onSubmit={onSubmit}/> :
                <ProfileData isOwner={isOwner} profile={profile} goToEditMode={goToEditMode}/>}
        </div>
    )
}

export default ProfileInfo;