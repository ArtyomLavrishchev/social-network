import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: MessagesPageType
    sendMessage: () => void
    updateNewMessageBody: (newText: string) => void
}
debugger
const Dialogs: React.FC<DialogsPropsType> = (props) => {
debugger
    let state = props.dialogsPage;

    let messagesElements =
        state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage()
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