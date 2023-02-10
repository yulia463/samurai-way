import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

type DialogsDataType = {
    id: number,
    name: string
}

type MessagesDataType = {
    id: number,
    text: string
}
export const Dialogs = () => {
    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: "Yulia"},
        {id: 2, name: "Semen"},
        {id: 3, name: "Evgenia"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Maria"},
        {id: 6, name: "Anastasia"}
    ]
    let dialogElements = dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    let messagesData: Array<MessagesDataType> = [
        {id: 1, text: "Hi"},
        {id: 2, text: "Hello"},
        {id: 3, text: "How are you?"},
        {id: 4, text: "Yo"},
    ]
    let messagesElement = messagesData.map(el => <Message key={el.id} text={el.text} id={el.id}/>)
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogElements}
            </div>

            <div className={styles.messages}>
                {messagesElement}
            </div>
        </div>
    )
}