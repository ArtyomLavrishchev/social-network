import React from "react";
import s from "./users.module.css";
import axios from 'axios';
import userPhoto from "../../assets/images/user-profile-icon-png.png"
import {UsersContainerTypes} from "./usersContainer";


function Users (props: UsersContainerTypes ) {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

        return <div>
            {
                props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.photo} alt={"avatar"}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
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
                </div>)
            }
        </div>

}

export default Users;