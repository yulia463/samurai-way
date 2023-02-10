import React from "react";
import styles from "./Dialogs.module.css";

type MessagePropsType = {
    text: string
    id: number
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message}>{props.text}</div>
    )
}