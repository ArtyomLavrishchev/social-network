import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {Paginator} from "../Common/Paginator/Paginator";

type OwnPropsType = {}
export type  UsersMapStateToPropsType = {
    users: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unfollow: (UserId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = UsersMapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <Paginator pageSize={this.props.pageSize}
                       totalItemsCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       portionSize={10}
                       isFetching={this.props.isFetching}/>
            {this.props.isFetching ?
                <Preloader/> :
                <Users
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<UsersMapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>
    (mapStateToProps, {follow, unfollow, requestUsers})
)(UsersContainer)