import React from 'react';
import {Route, withRouter} from "react-router-dom"
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";

import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateRedux} from "./redux/redux-store";
import Preloader from "./Components/Common/Preloader/Preloader";

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./Components/Login/Login'));

type OwnPropsType = {}
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: any
}
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </React.Suspense>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, {initializeApp}))(App);
