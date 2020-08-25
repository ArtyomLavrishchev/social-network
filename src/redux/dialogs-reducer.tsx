import {ActionTypes, MessagesPageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Артём",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU"
        },
        {
            id: 2,
            name: "Алёна",
            img: "https://topmsg.ru/wp-content/uploads/paren-v-pidzhake-i-kepke.jpg"
        },
        {
            id: 3,
            name: "Валерия",
            img: "https://pubg.best/data/avatars/l/0/721.jpg?1531143739"
        },
        {
            id: 4,
            name: "Кирилл",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU"
        },
        {
            id: 5,
            name: "Таня",
            img: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"
        }
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your IT-incubator?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"}
    ],
    newMessageText: ""
};

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 5, message: state.newMessageText}]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }

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