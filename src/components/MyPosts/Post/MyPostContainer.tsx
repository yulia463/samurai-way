import React from "react";
import MyPosts from "../MyPosts";
import {addPostAC, InitialStateType, updateNewTextAC} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    profileState: InitialStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateTextPost: (textPost: string) => void
};

export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType;

export let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileState: state.profileReducer
    }
}
export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateTextPost: (textPost: string) => {
            dispatch(updateNewTextAC(textPost))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


