import React from "react";
import MyPosts from "../MyPosts";
import StoreContext from "../../../StoreContext";
import {storeType} from "../../../redux/Redux-store";
import {addPostAC, updateNewTextAC} from "../../../redux/ProfileReducer";

export type MyPostContainerPropsType = {

}

export const MyPostContainer = (props: MyPostContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {
                (store: storeType) => {
                    const addPost = () => {
                        store.dispatch(addPostAC())

                    }
                    const updateTextPost =(textPost:string)=>{
                        store.dispatch(updateNewTextAC(textPost))
                    }

                    return (
                        <MyPosts posts={store.getState().profileReducer.posts}
                                 newPostText={store.getState().profileReducer.newPostText}
                                 addPost={addPost}
                                 updateTextPost={updateTextPost}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};