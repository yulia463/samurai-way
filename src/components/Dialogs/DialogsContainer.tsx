import React from "react";
import {Dialogs} from "./Dialogs";
import { DialogsPagesType,  updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {sendMessageAC} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";

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
        updateNewMessageText: (messageText: string) => dispatch(updateNewMessageBodyAC(messageText)),
        addMessage: () => dispatch(sendMessageAC())

    }
}

const AuthRedirectComponent = WithAuthRedirect(Dialogs);
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

