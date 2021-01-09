import React from "react";
import {ProfileType} from "../../../../redux/store";
import {Contact} from "./Contacts";

export const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
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
                <b>About me: </b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
        }
    </div>
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}