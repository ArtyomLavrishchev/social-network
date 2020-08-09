import {ActionTypes, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post.", likesCount: 11},
        {id: 3, message: "abracadabra", likesCount: 999},
    ],
    newPostText: ""
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: body
    } as const
}

export default profileReducer;