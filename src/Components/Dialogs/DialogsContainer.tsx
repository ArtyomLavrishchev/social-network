import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, MessagesPageType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type OwnPropsType = {}

type MapStateToPropsType = {
    dialogsPage: MessagesPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
    updateNewMessageBody: (newText: string) => void
}

export type DialogsContainerType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateRedux) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

export default compose(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, mapDispatchToProps)
)(Dialogs);