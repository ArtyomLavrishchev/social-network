import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-profile-icon-png.png"
import {UserType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UserPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

const Users = (props: UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)


    return <div>
        <div>
            {pages.map(p => {
                return <span
                    onClick={((e) => props.onPageChanged(p))}
                    className={props.currentPage === p
                        ? s.selectedPage : ""}>
                    {p}
                </span>
            })}
        </div>
        {props.users.map((u) =>
            <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                 className={s.photo}
                                 alt={"avatar"}/>
                                 </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.unfollow(u.id).then(resultCode => {
                                        if (resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    });
                                }}>
                                    Unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.follow(u.id).then(resultCode => {
                                        if (resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    });
                                }}>
                                    Follow
                                </button>
                            }
                        </div>
                    </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>
                    </span>
            </div>
        )}
    </div>
}
export default Users;