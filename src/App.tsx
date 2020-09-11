import React from 'react';
import {Route} from "react-router-dom"
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";

import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer/>}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>

    );
}

export default App;
