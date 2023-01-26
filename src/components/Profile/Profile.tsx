import React from "react";
import styles from './Profile.module.css'

const Profile=()=>{

    return(
        <div className={styles.content}>
            <div>
                <img
                    src={"https://germanyask.com/wp-content/uploads/2018/01/thomas-griesbeck-160453-unsplash-e1544101172691.jpg"}/>
            </div>
            <div>ava+description</div>
            <div>my posts
                <div>new post</div>
                <div>post1</div>
                <div>post2</div>
            </div>

        </div>
    )
};
export default Profile;