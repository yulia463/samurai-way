import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {ActionsTypes, DialogsDataType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";


type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}
type MessagesDataType = {
    id: number,
    text: string
}
export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    // let messagesData: Array<MessagesDataType> = [
    //     {id: 1, text: "Hi"},
    //     {id: 2, text: "Hello"},
    //     {id: 3, text: "How are you?"},
    //     {id: 4, text: "Yo"},
    // ]
    let messagesElement = props.messagesData.map(el => <Message key={el.id} text={el.text} id={el.id}/>)
    let newMessageBody = props.newMessageBody
    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogElements}
            </div>

            <div className={styles.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}