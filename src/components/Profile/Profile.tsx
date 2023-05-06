import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "../MyPosts/Post/MyPostContainer";
import {ProfileType} from "../../redux/ProfileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string)=>void
}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostContainer/>
        </div>
    )
};
