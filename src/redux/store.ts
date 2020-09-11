import {PostsType} from "../Components/Profile/MyPosts/Post/Post";
import {DialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollowSuccess
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {RootStateRedux} from "./redux-store";
import {Dispatch} from "redux";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
};
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    isFetching: boolean
};
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
    // location: { city: string, country: string }
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: { small: string, large: string }
} | null

export type GetStateType = () => AppStateType
export type  DispatchType = Dispatch<ActionTypes>

export type AppStateType = ReturnType<RootStateRedux>

export type PostActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof toggleIsFetching>;

export type MessageActionType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>;

export type UsersActionType =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleIsFollowingProgress>;

export type AuthActionType =
    ReturnType<typeof setAuthUserData>


export type ActionTypes = PostActionType | MessageActionType | UsersActionType | AuthActionType;