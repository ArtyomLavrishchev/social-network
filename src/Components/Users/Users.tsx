import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-profile-icon-png.png"
import {UserType} from "../../redux/store";

export type UserPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
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
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                 className={s.photo}
                                 alt={"avatar"}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}}>
                                    Unfollow
                                </button> :
                                <button onClick={() => {props.follow(u.id)}}>
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