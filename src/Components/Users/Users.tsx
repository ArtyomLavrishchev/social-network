import React from "react";
import {UserType} from "../../redux/store";
import {User} from "./User";

export type UserPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<UserPropsType> = (
    {
        users,
        follow,
        unfollow,
        followingInProgress
    }) => {
    return <div>
        {users.map((u) =>
            <User user={u}
                  follow={follow}
                  unfollow={unfollow}
                  followingInProgress={followingInProgress}/>
        )}
    </div>
}
export default Users;