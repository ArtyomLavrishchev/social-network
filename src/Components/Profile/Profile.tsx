import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import store, {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (newPost: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.item}>
            <ProfileInfo/>
            <MyPosts
                posts={store._state.profilePage.posts}
                newPostText={store._state.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}


export default Profile;