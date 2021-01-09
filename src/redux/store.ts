import {PostsType} from "../Components/Profile/MyPosts/Post/Post";
import {DialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {
    addPostActionCreator,
    deletePostAC,
    savePhotoSuccess,
    setProfileStatus,
    setUserProfile
} from "./profile-reducer";
import {addMessageActionCreator} from "./dialogs-reducer";
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
import {Dispatch} from "redux";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
};
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType
    isFetching: boolean
    status: string
    newPostText: string
};
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        [github: string]: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: ProfilePhotoType
} | null
export type ProfilePhotoType = {
    small: string,
    large: string
}

export type  DispatchType = Dispatch<ActionTypes>


export type PostActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setProfileStatus> |
    ReturnType<typeof deletePostAC>;

export type MessageActionType =
    ReturnType<typeof addMessageActionCreator>

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


export type ActionTypes =
    PostActionType
    | MessageActionType
    | UsersActionType
    | AuthActionType
    | ReturnType<typeof savePhotoSuccess>;