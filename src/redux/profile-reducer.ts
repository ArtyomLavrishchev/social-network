import {ActionTypes, DispatchType, ProfilePageType, ProfilePhotoType, ProfileType, ThunkType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {RootStateRedux} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "react";
import {stopSubmit} from "redux-form";

const ADD_POST = "social-network/profile/ADD-POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = 'social-network/TOGGLE_IS_FETCHING';
const SET_STATUS = 'social-network/profile/SET_STATUS';
const DELETE_POST = 'social-network/profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post.", likesCount: 11},
        {id: 3, message: "abracadabra", likesCount: 999},
    ],
    profile: null,
    isFetching: false,
    status: "",
    newPostText: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): any => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS :
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody: string) => {
    return {
        type: ADD_POST,
        newPostBody
    } as const
}
export const deletePostAC = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const setProfileStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const savePhotoSuccess = (photos: ProfilePhotoType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}
export const getStatus = (userId: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(response.data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch: any, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if (userId) {
            dispatch(getUserProfile(userId.toString()))
        }
    } else {
        const errorTitle = response.data.messages[0].split('->')[1].slice(0, -1).toLowerCase()
        dispatch(stopSubmit('edit-profile', {'contacts': {[errorTitle]: response.data.messages[0]} }));
        return Promise.reject(response.data.messages[0])
    }
}
export const getUserProfile = (userId: string) => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    const response = await usersAPI.getProfile(userId)
    dispatch(toggleIsFetching(false))
    dispatch(setUserProfile(response.data))
}
export default profileReducer;