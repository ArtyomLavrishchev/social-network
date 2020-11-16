import {ActionTypes, DispatchType, ProfilePageType, ProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post.", likesCount: 11},
        {id: 3, message: "abracadabra", likesCount: 999},
    ],
    profile: null,
    isFetching: false,
    status: ""
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
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
export const getStatus = (userId: string) => (dispatch: DispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setProfileStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: DispatchType) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
}

export const getUserProfile = (userId: string) => (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getProfile(userId).then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUserProfile(response.data))
    })
}

export default profileReducer;