import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, MessagesPageType} from "../../redux/store";
import {RootStateRedux} from "../../redux/redux-store";

type OwnPropsType = {

}

type MapStateToPropsType = {
    dialogsPage: MessagesPageType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
    updateNewMessageBody: (newText: string) => void
}

export type DialogsContainerType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateRedux) => {
    return {
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

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;