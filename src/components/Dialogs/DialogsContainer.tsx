import React from "react";
import {Dialogs} from "./Dialogs";
import { DialogsPagesType,  updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {sendMessageAC} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    dialogsPage: DialogsPagesType
    isAuth:any
}
export type DispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (messageText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialogsPage: state.dialogsReducer,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (messageText: string) => dispatch(updateNewMessageBodyAC(messageText)),
        addMessage: () => dispatch(sendMessageAC())

    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

