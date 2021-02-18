import React from 'react';
import {Route, withRouter, Switch, Redirect, Link} from "react-router-dom"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateRedux} from "./redux/redux-store";
import {AppHeader} from "./Components/Header/Header";
import "./App.css";
import 'antd/dist/antd.css';

import {Layout, Menu} from 'antd';
import {
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Background from "./Components/Common/Background/Background";

const {Content, Sider} = Layout;
const {SubMenu} = Menu;

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./Components/Login/Login'));

class App extends React.Component<AppPropsType> {
    state = {
        collapsed: true,
    };
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        const {collapsed} = this.state;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="Profile">
                            <Menu.Item key="1">
                                <Link to="/profile">Profile</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/dialogs">Messages</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3" icon={<TeamOutlined/>}>
                            <Link to="/users">Users</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <AppHeader/>
                    <Content className={"content"}>
                        <Background/>
                        <React.Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route exact path="/"
                                       render={() => <Redirect to={"/profile"}/>}/>
                                <Route exact path="/social-network"
                                       render={() => <Redirect to={"/profile"}/>}/>
                                <Route path="/profile/:userId?"
                                       render={() => <ProfileContainer/>}/>
                                <Route path="/users"
                                       render={() => <UsersContainer/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                                <Route path="/dialogs"
                                       render={() => <DialogsContainer/>}/>
                                <Route path="/!*" render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </React.Suspense>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, {initializeApp}))(App);

type OwnPropsType = {}
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: any
}
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

