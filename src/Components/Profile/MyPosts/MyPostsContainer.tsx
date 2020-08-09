import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator(state.profilePage.newPostText));
            }
            let onPostChange = (newText: string) => {
                let action = updateNewPostTextActionCreator(newText)
                store.dispatch(action)
            }
          return <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
        }
    }
    </StoreContext.Consumer>

}
export default MyPostsContainer;