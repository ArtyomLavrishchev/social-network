import {ActionTypes, MessagesPageType} from "./store";

const SEND_MESSAGE = "social-network/dialogs/ADD-MESSAGE";

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
            img: "https://sun1-19.userapi.com/impg/c855032/v855032039/2231b7/6euQqUV0YMQ.jpg?size=200x0&quality=88&crop=6,5,1288,1288&sign=83bf255e018a05d0f8b73055341a71f7&c_uniq_tag=AHl_dkk5RHNoYgPMQ8zNoJj8ZqBCmaFOlda9WWmeP_k&ava=1"
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
    ]
};

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}

export default dialogsReducer;