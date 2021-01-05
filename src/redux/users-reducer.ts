import {ActionTypes, DispatchType, UserType} from "./store";
import {UsersMapStateToPropsType} from "../Components/Users/UsersContainer";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'social-network/users/SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'social-network/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'


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
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
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
    async (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setCurrentPage(page))
    }

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: APIMethodType, actionCreator: ACType) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let resultCode = await apiMethod(userId)
    if (resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const follow = (userID: number) => {
    return async (dispatch: DispatchType) => {
        followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userID: number) => {
    return async (dispatch: DispatchType) => {
        followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }

}

type APIMethodType = (id: number) => Promise<any>
type ACType = (userID: number) =>
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess>;


export default usersReducer;