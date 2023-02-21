import React, {useState} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostDataType} from "../../redux/State";

export type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost:()=>void
}

const MyPosts = (props: MyPostsPropsType) => {

    let [textarea,setTextarea] = useState("")
    let postsElements = props.postData.map(el => <Post title={el.text} likesCount={el.likesCount}/>)
    const onClickHandler = () => {

    }
    const onChangeHandler = () =>{

    }
    let newPostElement = React.createElement
let addPost = ()=>{
        let text =newPostElement.currentTarget.value
    props.addPost(text)
}

    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea onChange={onChangeHandler}></textarea></div>

                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;