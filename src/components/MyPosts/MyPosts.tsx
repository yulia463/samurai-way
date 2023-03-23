import React, {ChangeEvent,KeyboardEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

import {MyPostsPropsType} from "./Post/MyPostContainer";



const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profileState.posts.map(el => <Post key={el.id} title={el.text} likesCount={el.likesCount}/>)

    const addPostHandler = () => {
        props.addPost()
     //  props.dispatch(addPostAC(props.newPostText))

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextPost(e.currentTarget.value)
    }
    const onEnterClick=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key === "Enter"){
            addPostHandler()
        }
    }
    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onKeyDown={onEnterClick}
                        value={props.profileState.newPostText}
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;