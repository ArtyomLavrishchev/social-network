import React from "react";
import s from "./users.module.css";
import axios from 'axios';
import userPhoto from "../../assets/images/user-profile-icon-png.png"
import {UserType} from "../../redux/store";


type PropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((u) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small ? u.photos.small : userPhoto} className={s.photo} alt={"avatar"}/>
            </div>
    <div>{u.followed ? <button onClick={() => {
            this.props.unfollow(u.id)
        }}>Unfollow</button> :
        <button onClick={() => {
            this.props.follow(u.id)
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
                        </div>
                    )}
            </div>
        )
    }
}

export default Users;