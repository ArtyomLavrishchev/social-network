import {ActionTypes, UserType} from "./store";
import {UsersMapStateToPropsType} from "../Components/Users/UsersContainer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};
const usersReducer = (state: UsersMapStateToPropsType = initialState, action: ActionTypes): UsersMapStateToPropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count}
        default:
            return state;
    }
}
export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
};
export const setTotalUsersCountAC = (totalUsersCont: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: totalUsersCont
    } as const
};
export default usersReducer;