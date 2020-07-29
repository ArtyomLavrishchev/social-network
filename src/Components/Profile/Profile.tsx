import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import store, {ProfilePageType} from "../../redux/state";
import {ActionTypes} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.item}>
            <ProfileInfo/>
            <MyPosts
                posts={store._state.profilePage.posts}
                newPostText={store._state.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}


export default Profile;