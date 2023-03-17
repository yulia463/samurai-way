import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {ActionsTypes, PostDataType} from "../../redux/State";
import {MyPostContainer} from "../MyPosts/Post/MyPostContainer";


export type ProfilePropsType = {
    profilePage: PostDataType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void


}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer profilePage={props.profilePage}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}

            />
        </div>
    )
};
