import React from "react";
import {createField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../redux/store";
import s from "../../../Common/FormsControls/FormsControls.module.css";

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType, ProfileFormPropsType> & ProfileFormPropsType> = (
    {
        handleSubmit,
        profile,
        error
    }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <div>
                <b>Full name: </b>
                {createField('Full name', 'fullName', [], Input, null, null)}
            </div>
            <div>
                <b>Looking for a job: </b>
                {createField('', 'lookingForAJob', [], Input, null, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills: </b>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea, null, null)}
            </div>
            <div>
                <b>About me: </b>
                {createField('About me', 'aboutMe', [], Textarea, null, null)}
            </div>
            {profile && <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map((key) => {
                return <div key={key}>
                    <b>{key}: </b> {createField(key, 'contacts.' + key, [], Input, null, null)}
                </div>
            })}
            </div>}
        </div>
    </form>
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
}