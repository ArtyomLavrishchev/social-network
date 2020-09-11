import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";

const Dialogs: React.FC<DialogsContainerType> = (props) => {

    let state = props.dialogsPage;

    let messagesElements =
        state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage(props.dialogsPage.newMessageText)
    }
    let dialogsElements = state.dialogs.map(d => <DialogItem
        key={d.id}
        name={d.name}
        id={d.id}
        img={d.img}/>)
    let onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value;
        props.updateNewMessageBody(newText);
    }

    let newMessageBody = state.newMessageText;
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div>
                <textarea className={s.text} onChange={onMessageChange} value={newMessageBody}/>
                <button className={s.button} onClick={onSendMessageClick}>➤</button>
            </div>
        </div>
    );
}
export default Dialogs;