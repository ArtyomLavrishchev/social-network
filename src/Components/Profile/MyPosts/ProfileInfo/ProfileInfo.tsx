import React, {useState} from 'react';
import {ProfileType} from "../../../../redux/store";
import Preloader from "../../../Common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileDataFormRedux, ProfileFormDataType} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";
import Photo from "./Photo";
import {Col, Row} from "antd";

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


    if (!profile) return <Preloader/>;
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Photo profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </Col>
                <Col span={18}>
                    {editMode ?
                        <ProfileDataFormRedux editMode={editMode} setEditMode={setEditMode} profile={profile}
                                              initialValues={profile} onSubmit={onSubmit}/> :
                        <ProfileData isOwner={isOwner} profile={profile} goToEditMode={goToEditMode}/>}
                </Col>
            </Row>
        </div>
    )
}

export default ProfileInfo;