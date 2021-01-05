import React from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import {UserType} from "../../redux/store";
import {User} from "./User";

export type UserPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<UserPropsType> = (
    {
        pageSize,
        currentPage,
        totalUsersCount,
        onPageChanged,
        follow,
        unfollow,
        followingInProgress,
        ...props
    }) => {
    return <div>
        <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        <div>
            {props.users.map((u) =>
                <User user={u}
                      follow={follow}
                      unfollow={unfollow}
                      followingInProgress={followingInProgress}/>
            )}
        </div>
    </div>
}
export default Users;