import React from "react";
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogsType = {
    id: number
    name: string
    img: string
}

const DialogItem: React.FC<DialogsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return <div>
        <NavLink className={s.dialog} to={path}><img src={props.img}/>{props.name}</NavLink>
    </div>
}

export default DialogItem;