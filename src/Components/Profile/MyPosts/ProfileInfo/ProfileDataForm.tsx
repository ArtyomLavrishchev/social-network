import React, {Dispatch, SetStateAction, useState} from "react";
import {createField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../redux/store";
import s from "../../../Common/FormsControls/FormsControls.module.css";
import {Col, Modal, Row} from 'antd';

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType, ProfileFormPropsType> & ProfileFormPropsType> = (
    {
        handleSubmit,
        profile,
        error,
        setEditMode,
        editMode
    }) => {

    const handleCancel = () => {
        setEditMode(false);
    };
    return <div>
        <Modal title="Basic Modal" visible={editMode} onOk={handleSubmit} onCancel={handleCancel}>
            <form onSubmit={handleSubmit}>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <Row>
                        <Col span={12}>
                            <b>Full name: </b>
                            {createField('Full name', 'fullName', [], Input, null, null)}
                            <b>Looking for a job: </b>
                            {createField('', 'lookingForAJob', [], Input, null, {type: "checkbox"})}
                            <b>My professional skills: </b>
                            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea, null, null)}
                            <b>About me: </b>
                            {createField('About me', 'aboutMe', [], Textarea, null, null)}
                        </Col>
                        <Col span={12}>
                            {profile && <div>
                                <b>Contacts: </b> {Object.keys(profile.contacts).map((key) => {
                                return <div key={key}>
                                    <b>{key}: </b> {createField(key, 'contacts.' + key, [], Input, null, null)}
                                </div>
                            })}
                            </div>}
                        </Col>
                    </Row>
                </div>
            </form>
        </Modal>


    </div>
}

export const ProfileDataFormRedux = reduxForm<ProfileFormDataType, ProfileFormPropsType>({form: "edit-profile"})(ProfileDataForm)

export type ProfileFormDataType = {
    fullName: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    aboutMe: string
}
export type ProfileFormPropsType = {
    profile: ProfileType
    editMode: boolean
    setEditMode: Dispatch<SetStateAction<boolean>>
}