import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./users";
import {ActionTypes, UserType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";

type OwnPropsType = {}

type  MapStateToPropsType = {
    users: Array<UserType>
}

let mapStateToProps = (state: RootStateRedux) => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void

}

export type UsersContainerTypes = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}


const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

