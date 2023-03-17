import React from "react";
import MyPosts from "../MyPosts";
import {ActionsTypes, addPostAC, PostDataType, updateNewTextAC} from "../../../redux/State";



export type MyPostsPropsType = {
    profilePage: Array<PostDataType>
    newPostText:string
    dispatch: (action: ActionsTypes) => void
}

export const MyPostContainer = (props: MyPostsPropsType) => {

    const addPost = () => {
         props.dispatch(addPostAC(props.newPostText))

    }
    const onChangeHandler = (text:string) => {
        props.dispatch(updateNewTextAC(text))
    }

    return (
        <div> <MyPosts
                       profilePage={props.profilePage}
                       newPostText={props.newPostText}
                       updateNewPostText={onChangeHandler}
                       addPost={addPost} /></div>
    )
};
