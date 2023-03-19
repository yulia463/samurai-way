import React from "react";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";
import {sendMessageAC} from "../../redux/ProfileReducer";
import {updateNewMessageBodyAC} from "../../redux/DialogsReducer";

type DialogsPropsContainerType = {

}
type MessagesDataType = {
    id: number,
    text: string
}

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store)=>{

            const onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }
            const onNewMessageChange = (text:string) => {
                store.dispatch(updateNewMessageBodyAC(text))
            }

        return    <Dialogs
                dialogsData={store.getState().dialogsReducer.dialogsData}
                messagesData={store.getState().dialogsReducer.messagesData}
                newMessageBody={store.getState().dialogsReducer.newMessageBody}
                addMessage={onSendMessageClick}
                updateNewMessageText={onNewMessageChange}/>
        }
    }
    </StoreContext.Consumer>
}
