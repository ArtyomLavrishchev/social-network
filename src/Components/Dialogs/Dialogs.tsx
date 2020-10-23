import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    newMessageBody: string
}

const Dialogs: React.FC<DialogsContainerType> = (props) => {

    let state = props.dialogsPage;

    let messagesElements =
        state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let dialogsElements = state.dialogs.map(d => <DialogItem
        key={d.id}
        name={d.name}
        id={d.id}
        img={d.img}/>)

    let addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}
const maxLength15 = maxLengthCreator(15)
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength15]}
                    component={Textarea}
                    className={s.text}
                    name={"newMessageBody"}
                    placeholder={"Enter your message"}
                />
                <button className={s.button}>➤</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;