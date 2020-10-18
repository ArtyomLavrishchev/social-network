import {addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionTypes} from "../../../redux/store";
import {RootStateRedux} from "../../../redux/redux-store";
import {PostsType} from "./Post/Post";

type OwnPropsType = {}

type MapStateToPropsType = {
    posts: Array<PostsType>
}
type MapDispatchToPropsType = {
    addPost: (newPostBody: string) => void
}

export type MyPostsContainerType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootStateRedux) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;