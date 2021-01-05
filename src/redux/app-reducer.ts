import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

let initialState = {
    initialized: false
};
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}
export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
           dispatch(actions.initializedSuccess())
        })
};