import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>

                <DialogItem name={"Yulia"} id={"1"}/>
                <DialogItem name={"Semen"} id={"2"}/>
                <DialogItem name={"Evgenia"} id={"3"}/>
                <DialogItem name={"Anna"} id={"4"}/>
                <DialogItem name={"Maria"} id={"5"}/>
                <DialogItem name={" Anastasia"} id={"6"}/>

            </div>
            <div className={styles.messages}>
               <Message text={"Hi"}/>
               <Message text={"Hello"}/>
               <Message text={"How are you?"}/>
               <Message text={"Yo"}/>

            </div>
        </div>
    )
}