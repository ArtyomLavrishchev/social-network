import {PostsType} from "../Components/Profile/MyPosts/Post/Post";
import {DialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../Components/Dialogs/Message/Message";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
};
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};
export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
};
export type StoreType = {
    _state: StatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionTypes) => void
};
export type PostActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>;
export type MessageActionType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>;
export type ActionTypes = PostActionType | MessageActionType;

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
        dialogsPage: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber();
    }
}

export default store;