import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(addMessageActionCreator(state.newMessageText))
            }
            let onMessageChange = (newText: string) => {
                store.dispatch(updateNewMessageTextActionCreator(newText));
            }

            return <Dialogs
                updateNewMessageBody={onMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer;