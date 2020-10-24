import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {RootStateRedux} from "../../redux/redux-store";

type OwnPropsType = {}
export type AuthMapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type AuthMapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
export type AuthPropsType = AuthMapStateToPropsType & AuthMapDispatchToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>

    }
}

const mapStateToProps = (state: RootStateRedux): AuthMapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect<AuthMapStateToPropsType, AuthMapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);