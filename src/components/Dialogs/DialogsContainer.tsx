import React from "react";
import {Dialogs} from "./Dialogs";
import {DialogsDataType, DialogsPagesType, MessagesDataType, updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {sendMessageAC} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    dialogsPage: DialogsPagesType
}
export type DispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (messageText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialogsPage: state.dialogsReducer
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        },
        addMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
//const DialogsContainer = connect<MapStateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

