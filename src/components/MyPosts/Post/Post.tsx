import React from "react";
import styles from "./Post.module.css";

type PostPropsType = {
    title: string
    likesCount: number
}
const Post = (props: PostPropsType) => {

    return (
        <div className={styles.item}>
            <img src={"https://i.pinimg.com/564x/9e/36/f8/9e36f87d8ad54713f91d3538f66ab221.jpg"}/>
            {props.title}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
};
export default Post;