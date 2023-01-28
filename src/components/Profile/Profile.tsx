import React from "react";
import styles from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {

    return (
        <div className={styles.content}>
            <div>
                <img
                    src={"https://germanyask.com/wp-content/uploads/2018/01/thomas-griesbeck-160453-unsplash-e1544101172691.jpg"}/>
            </div>
            <div>ava+description</div>

            <MyPosts/>
        </div>
    )
};
export default Profile;