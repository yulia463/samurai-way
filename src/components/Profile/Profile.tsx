import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "../MyPosts/Post/MyPostContainer";

type ProfilePropsType={
    profile:any
}
export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostContainer/>
        </div>
    )
};
