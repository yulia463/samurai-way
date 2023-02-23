import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostDataType, upgradeNewPostText} from "../../redux/State";


export type MyPostsPropsType = {
    profilePage: Array<PostDataType>
    addPost: () => void
    upgradeNewPostText: (newText: string) => void
    newPostText:string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.map(el => <Post title={el.text} likesCount={el.likesCount}/>)

    const addPost = () => {
        props.addPost()

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.upgradeNewPostText(e.currentTarget.value)
    }
    const onEnterClick=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key === "Enter"){
            addPost()
        }
    }
    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea onKeyDown={onEnterClick} value={props.newPostText} onChange={onChangeHandler}></textarea></div>

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