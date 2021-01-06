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
        <div className={s.wrapper}>
            <div className={s.item}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small : userPhoto}
                         className={s.photo}
                         alt={"avatar"}/>
                </NavLink>

                {user.followed ?
                    <button className={s.followed}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>
                        &#10007;
                    </button> :
                    <button className={s.unfollowed}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>
                        &#10003;
                    </button>
                }
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>"user.location.country"</div>
                <div>"user.location.city"</div>
            </div>
        </div>
    )
}