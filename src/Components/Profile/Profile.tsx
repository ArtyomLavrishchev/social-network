import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo, {ProfilePropsType} from "./MyPosts/ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: ProfilePropsType) => {
    return <div className={s.item}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}


export default Profile;