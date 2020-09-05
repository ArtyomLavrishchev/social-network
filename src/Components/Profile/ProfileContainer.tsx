import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import Preloader from "../Common/Preloader/Preloader";

type MapStateToPropsType = {
    profile: ProfileType
    isFetching: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type OwnPropsType = {}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Profile {...this.props} profile={this.props.profile}/>
            }</>
    };
}

let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, {
    setUserProfile,
    toggleIsFetching
})(WithUrlDataContainerComponent);