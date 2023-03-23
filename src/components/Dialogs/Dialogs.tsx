import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {DialogsDataType} from "../../redux/DialogsReducer";
import {DispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";

// type DialogsPropsType = {
//     dialogsData: Array<DialogsDataType>
//     // messagesData: Array<MessagesDataType>
//     // newMessageBody: string
//     addMessage: () => void;
//     updateNewMessageText: (text: string) => void;
// }
type MessagesDataType = {
    id: number,
    text: string
}
type DialogsPropsType = MapStateToPropsType & DispatchToPropsType

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElement = props.dialogsPage.messagesData.map(el => <Message key={el.id} text={el.text} id={el.id}/>)
    let newMessageBody =props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.addMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageText(body)
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