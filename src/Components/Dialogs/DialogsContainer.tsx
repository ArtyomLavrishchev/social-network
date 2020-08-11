import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, StatePropsType} from "../../redux/store";

let mapStateToProps = (state: StatePropsType) => {
   return{
dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
return {
    updateNewMessageBody: (newText: string) => {
        dispatch(updateNewMessageTextActionCreator(newText))
    },
    sendMessage: (newMessageText: string) => {
        dispatch(addMessageActionCreator(newMessageText))
    }
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;