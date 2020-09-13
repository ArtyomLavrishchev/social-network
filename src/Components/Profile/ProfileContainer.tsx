import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType
    isFetching: boolean
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
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Profile {...this.props} profile={this.props.profile}/>
            }</>
    }
}

let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}
export default compose(
    withAuthRedirect,
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>
    (mapStateToProps, {getUserProfile})
)(ProfileContainer)
