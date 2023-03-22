import React from "react";
import {Dialogs} from "./Dialogs";
import {updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {sendMessageAC} from "../../redux/ProfileReducer";


type MapStatePropsType = {
    // dialogsData:
}
let mapStateToProps = (state: any) => {

    return {
        dialogsData: state.dialogsReducer
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (text: any) => {
            dispatch(updateNewMessageBodyAC(text))
        },
        addMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
