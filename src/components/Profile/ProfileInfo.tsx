import React from "react";
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://germanyask.com/wp-content/uploads/2018/01/thomas-griesbeck-160453-unsplash-e1544101172691.jpg"}/>
            </div>
            <div className={styles.descriptionBlock}>ava+description</div>
        </div>
    )
}