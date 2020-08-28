import {PostsType} from "../Components/Profile/MyPosts/Post/Post";
import {DialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "./users-reducer";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
};
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
    // location: { city: string, country: string }
}

export type PostActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>;

export type MessageActionType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>;

export type UsersActionType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>;


export type ActionTypes = PostActionType | MessageActionType | UsersActionType;