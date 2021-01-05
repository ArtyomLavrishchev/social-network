import {ActionTypes, DispatchType} from "./store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state: AuthReducerType = initialState, action: ActionTypes): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    } as const
};
export const getAuthUserData = () => async (dispatch: DispatchType) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
};
export const logout = () => async (dispatch: DispatchType) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;