import React from "react";
import MyPosts from "../MyPosts";
import {addPostAC, updateNewTextAC} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";


export let mapStateToProps = (state: any) => {
    return {
        dialogsData: state.dialogsData
    }
}
export let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateTextPost: (textPost: any) => {
            dispatch(updateNewTextAC(textPost))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
