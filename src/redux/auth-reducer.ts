import {ActionTypes, DispatchType} from "./store";
import {AuthMapStateToPropsType} from "../Components/Header/HeaderContainer";
import {authAPI} from "../api/api";

export type AuthReducerType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
} | AuthMapStateToPropsType

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state: AuthReducerType = initialState, action: ActionTypes): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
};
export const getAuthUserData = () => (dispatch: DispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login));
            }
        });
};


export default authReducer;