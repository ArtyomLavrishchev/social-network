import React from "react";
import s from "./Message.module.css"

export type MessageType = {
    id?: number
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return <div className={s.mes}>{props.message}</div>
}
export default Message;