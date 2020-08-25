import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionTypes} from "../../../redux/store";
import {RootStateRedux} from "../../../redux/redux-store";
import {PostsType} from "./Post/Post";

type OwnPropsType = {

}

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsContainerType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootStateRedux) => {
    return {
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

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;