import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostDataType} from "../../redux/State";

export type MyPostsPropsType = {
    postData: Array<PostDataType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postData.map(el => <Post title={el.text} likesCount={el.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea></textarea></div>

                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;