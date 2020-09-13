import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/users-reducer";
import {UserType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type OwnPropsType = {}
export type  UsersMapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unfollow: (UserId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = UsersMapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

let mapStateToProps = (state: RootStateRedux): UsersMapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect<UsersMapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>
    (mapStateToProps, {follow, unfollow, getUsers})
)(UsersContainer)