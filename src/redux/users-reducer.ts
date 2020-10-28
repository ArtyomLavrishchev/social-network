import {ActionTypes, DispatchType, UserType} from "./store";
import {UsersMapStateToPropsType} from "../Components/Users/UsersContainer";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, currentPage: action.page}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId),

            }
        default:
            return state;
    }
}
export const followSuccess = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
};
export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    } as const
};
export const setTotalUsersCount = (totalUsersCont: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: totalUsersCont
    } as const
};
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
};
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
};

export const requestUsers = (page: number, pageSize: number) =>
    (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(page))
        });
    }

export const follow = (userID: number) => (dispatch: DispatchType) => {
    dispatch(toggleIsFollowingProgress(true, userID))
    usersAPI.follow(userID).then(resultCode => {
        if (resultCode === 0) {
            dispatch(followSuccess(userID))
        }
        dispatch(toggleIsFollowingProgress(false, userID))
    });
}

export const unfollow = (userID: number) => (dispatch: DispatchType) => {
    dispatch(toggleIsFollowingProgress(true, userID))
    usersAPI.unfollow(userID).then(resultCode => {
        if (resultCode === 0) {
            dispatch(unfollowSuccess(userID))
        }
        dispatch(toggleIsFollowingProgress(false, userID))
    });
}

export default usersReducer;