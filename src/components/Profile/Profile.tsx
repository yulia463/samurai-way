import React from "react";
import styles from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {PostDataType} from "../../redux/State";

export type ProfilePropsType={
    profilePage:PostDataType[]
    addPost:()=>void
    upgradeNewPostText: (newText: string) => void
    newPostText:string

}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts  profilePage={props.profilePage}
                      addPost={props.addPost}
                      upgradeNewPostText={props.upgradeNewPostText}
                      newPostText={props.newPostText}
            />
        </div>
    )
};
