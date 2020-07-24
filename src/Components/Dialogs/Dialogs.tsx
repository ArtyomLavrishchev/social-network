import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagePage: MessagesPageType
    updateNewMessageText: (newText: string) => void
    addMessage: (newMessage: string) => void
    newMessageText: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let newMessage =
        props.messagePage.messages.map(m => <Message message={m.message}/>)

    let addMessage = () => {
        props.addMessage(props.newMessageText)
    }
    let dialogsElements = props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {newMessage}
                </div>
            </div>
            <div>
                <textarea className={s.text} onChange={onMessageChange} value={props.newMessageText}/>
                <button className={s.button} onClick={addMessage}>➤</button>
            </div>
        </div>
    );
}
export default Dialogs;