import React from "react";
import {ActionsTypes, DialogsDataType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";
import {Dialogs} from "./Dialogs";

type DialogsPropsContainerType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
    updateNewMessageText: (text: string) => void;

}
type MessagesDataType = {
    id: number,
    text: string
}
export const DialogsContainer = (props: DialogsPropsContainerType) => {

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (text:string) => {
        props.dispatch(updateNewMessageBodyAC(text))
    }

    return (
       <Dialogs
           dialogsData={props.dialogsData}
           messagesData={props.messagesData}
           newMessageBody={props.newMessageBody}
           addMessage={onSendMessageClick}
           updateNewMessageText={onNewMessageChange}
       />
    )
}