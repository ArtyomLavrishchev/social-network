import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type OwnPropsType = {}
type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
}

let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, {setUserProfile})(ProfileContainer);