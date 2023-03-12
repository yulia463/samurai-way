import React from "react";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";

export type ProfilePagesType = {
    posts: Array<PostDataType>
    newPostText: string
}
export type DialogsPagesType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessageBody: string

}
export type StoreType = {
    profilePage: ProfilePagesType,
    dialogPage: DialogsPagesType
}
export type MessagesDataType = {
    id: number
    text: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostDataType = {
    id: number,
    text: string,
    likesCount: number
}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>

export type StorePropsType = {
    _state: StoreType
    subscribe: (callback: (state: StoreType) => void) => void
    rerenderEntireTree: () => void
    _callSubscriber: (state: StoreType) => void
    getState: () => StoreType
    dispatch: (action: ActionsTypes) => void

}

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: postText
    } as const
};
export const updateNewTextAC = (postText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: postText
    } as const
};
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
};
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
};

let store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "how do you like my social network?", likesCount: 7},
                {id: 2, text: "have questions ? ", likesCount: 48},
                {id: 3, text: " ask them on my LinkedIn", likesCount: 0}
            ],
            newPostText: ""
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: "Yulia"},
                {id: 2, name: "Semen"},
                {id: 3, name: "Evgenia"},
                {id: 4, name: "Anna"},
                {id: 5, name: "Maria"},
                {id: 6, name: "Anastasia"}
            ],
            messagesData: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Hello"},
                {id: 3, text: "How are you?"},
                {id: 4, text: "Yo"},
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    rerenderEntireTree() {
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state)

    },
    subscribe(callback) {
        this._callSubscriber = callback
    }
}

export default store;
