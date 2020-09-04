import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateRedux} from "../../redux/redux-store";

type OwnPropsType = {}
export type AuthMapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type AuthMapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
export type AuthPropsType = AuthMapStateToPropsType & AuthMapDispatchToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>

    }
}

const mapStateToProps = (state: RootStateRedux): AuthMapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect<AuthMapStateToPropsType, AuthMapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, {setAuthUserData})(HeaderContainer);