import React from "react";
import styles from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {PostDataType} from "../../redux/State";

export type ProfilePropsType={
    postData:Array<PostDataType>
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
};