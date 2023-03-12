import React from "react";
import styles from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {ActionsTypes, PostDataType} from "../../redux/State";

export type ProfilePropsType = {
    profilePage: PostDataType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void


}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}

            />
        </div>
    )
};
