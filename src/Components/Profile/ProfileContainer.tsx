import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import Preloader from "../Common/Preloader/Preloader";

type MapStateToPropsType = {
    profile: ProfileType
    isFetching: boolean
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (UserId: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type OwnPropsType = {}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Profile {...this.props} profile={this.props.profile}/>
            }</>
    };
}

let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>
(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);