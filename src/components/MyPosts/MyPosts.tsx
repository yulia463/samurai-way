import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

type PostDataType = {
    id: number,
    text: string,
    likesCount: number
}

const MyPosts = () => {
    let postData: Array<PostDataType> = [
        {id: 1, text: "how do you like my social network?", likesCount: 7},
        {id: 2, text: "have questions ? ask them on my LinkedIn", likesCount: 48}
    ]
    let postsElements = postData.map(el => <Post title={el.text} likesCount={el.likesCount}/>)

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