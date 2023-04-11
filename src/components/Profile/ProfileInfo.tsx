import React from "react";
import styles from './ProfileInfo.module.css'
import {Preloader} from "../Common/Preloader/Preloader";

type ProfileInfoPropsType={
    profile:any
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {

    if(!props.profile ){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src={"https://germanyask.com/wp-content/uploads/2018/01/thomas-griesbeck-160453-unsplash-e1544101172691.jpg"}/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}