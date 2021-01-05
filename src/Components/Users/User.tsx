import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-profile-icon-png.png"
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/store";

export type UserPropsType = {
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

export const User: React.FC<UserPropsType> = (
    {
        user,
        followingInProgress,
        unfollow,
        follow
    }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto}
                             className={s.photo}
                             alt={"avatar"}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>
                            Unfollow
                        </button> :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>
                            Follow
                        </button>
                    }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>"user.location.country"</div>
                <div>"user.location.city"</div>
            </span>
        </div>
    )
}