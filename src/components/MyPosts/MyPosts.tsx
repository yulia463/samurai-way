import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div>my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post title={"how do you like my social network?"} likesCount={7}/>
                <Post title={"have questions ? ask them on my LinkedIn"} likesCount={48}/>

            </div>
        </div>
    )
};
export default MyPosts;