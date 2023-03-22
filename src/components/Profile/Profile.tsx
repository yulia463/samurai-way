import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import MyPostContainer from "../MyPosts/Post/MyPostContainer";

export type ProfilePropsType = {

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer newPostText={''} posts={}/>
        </div>
    )
};
