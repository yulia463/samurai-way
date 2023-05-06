import {ActionsTypes} from "./ActionsType";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../Api/Api";
import {setAuthUserDataAC} from "./AuthReducer";

//export type InitialStateProfileType = typeof initialState;

export type InitialStateType = {
    posts: PostsPropsType[]
    newPostText: string
    profile: ProfileType | null
    status: string

}
export type PostsPropsType = {
    id: number
    text: string
    likesCount: number
}
let initialState = {
    posts: [
        {id: 1, text: "how do you like my social network?", likesCount: 7},
        {id: 2, text: "have questions ? ", likesCount: 48},
        {id: 3, text: " ask them on my LinkedIn", likesCount: 0}
    ],
    newPostText: "",
    profile: null,
    status: ""
};

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: null | string
    youtube: null | string
    mainLink: null | string
}

export type ProfileType = null | {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        large: string
        small: string
    }
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: new Date().getDate(),
                text: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        case 'SET-STATUS': {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
};
export const updateNewTextAC = (postText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: postText
    } as const
};
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
};
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
};
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
};


export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {

        dispatch(setUserProfileAC(response.data))
        dispatch(setAuthUserDataAC('2', 'test', 'eyeye'))

    });
};
export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatusAC(response.data))

    });
};
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }


    });
};
