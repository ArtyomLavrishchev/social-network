import React from 'react';
import {Route} from "react-router-dom"
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StatePropsType, StoreType} from "./redux/state";
import {PostsType} from "./Components/Profile/MyPosts/Post/Post";
import {MessageType} from "./Components/Dialogs/Message/Message";


type PropsType = {
    store: StoreType
    state: StatePropsType
    addPost: (newPost: string) => void
    updateNewPostText: (newText: string) => void
    addMessage: (newMessage: string) => void
    updateMessageText: (newText: string) => void
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile
                           profilePage={state.profilePage}
                           addPost={props.store.addPost.bind(props.store)}
                           updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           newPostText={state.profilePage.newPostText}
                       />}/>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           messagePage={state.messagesPage}
                           addMessage={props.store.addMessage.bind(props.store)}
                           updateNewMessageText={props.store.updateMessageText.bind(props.store)}
                           newMessageText={state.messagesPage.newMessageText}
                       />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
