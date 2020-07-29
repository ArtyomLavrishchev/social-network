import {PostsType} from "../Components/Profile/MyPosts/Post/Post";
import {DialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";


export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type StatePropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
    newMessageText: string
}

type ChangeNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}

type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}

type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionTypes =
    AddPostActionType |
    ChangeNewTextActionType |
    AddMessageActionType |
    ChangeNewMessageActionType

export type StoreType = {
    _state: StatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionTypes) => void
}

let store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post.", likesCount: 11},
                {id: 3, message: "abracadabra", likesCount: 999},
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Артём",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU"
                },
                {id: 2, name: "Алёна", img: "https://topmsg.ru/wp-content/uploads/paren-v-pidzhake-i-kepke.jpg"},
                {id: 3, name: "Валерия", img: "https://pubg.best/data/avatars/l/0/721.jpg?1531143739"},
                {
                    id: 4,
                    name: "Кирилл",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU"
                },
                {id: 5, name: "Таня", img: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your IT-incubator?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"}
            ],
            newMessageText: ""
        },
    },

    _callSubscriber() {
        console.log("State changed")
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";

            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessageType = {
                message: action.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = "";

            store._callSubscriber();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber();
        }
    }
}


export default store;