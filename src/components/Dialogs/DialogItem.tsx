import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: any
}
export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    )
}