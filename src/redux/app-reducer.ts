import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";
import {ThunkType} from "./store";

const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS'


let initialState: InitialStateType = {
    initialized: false
};
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}
export const actions = {
    initializedSuccess: (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS} as const)
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
           dispatch(actions.initializedSuccess())
        })
};

export type InitialStateType = {
    initialized: boolean
}
type ActionsType = InferActionsTypes<typeof actions>


type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}