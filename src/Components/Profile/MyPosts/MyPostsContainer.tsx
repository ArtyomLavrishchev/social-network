import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionTypes, StatePropsType} from "../../../redux/store";

let mapStateToProps = (state: StatePropsType) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;