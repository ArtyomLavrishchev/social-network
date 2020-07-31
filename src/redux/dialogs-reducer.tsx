import {ActionTypes, MessagesPageType} from "./state";
import {MessageType} from "../Components/Dialogs/Message/Message";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state: MessagesPageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 5,
                message: action.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    } as const
}
export const updateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}

export default dialogsReducer;