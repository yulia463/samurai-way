import React, {ChangeEvent, useState} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostDataType, upgradeNewPostText} from "../../redux/State";


export type MyPostsPropsType = {
    profilePage: Array<PostDataType>
    addPost: (text: string) => void
    upgradeNewPostText: (newText: string) => void

}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.map(el => <Post title={el.text} likesCount={el.likesCount}/>)

    const addPost = () => {
        props.addPost(props.profilePage)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.upgradeNewPostText(e.currentTarget.value)
    }
    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea onChange={onChangeHandler}></textarea></div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;