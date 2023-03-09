import React from "react";

export type StoreType = {
    profilePage: {
        posts: Array<PostDataType>
        newPostText: string
    },
    dialogPage: {
        dialogsData: Array<DialogsDataType>,
        messagesData: Array<MessagesDataType>
    }
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

export type ActionsTypes= ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC>

export type StorePropsType = {
    _state: StoreType
    subscribe: (callback: (state: StoreType) => void) => void
    rerenderEntireTree: () => void
    _callSubscriber: (state: StoreType) => void
    getState: () => StoreType
    dispatch: (action: ActionsTypes) => void
}
export const addPostAC =(postText:string)=>{
    return {
        type:'ADD-POST',
        newPostText:postText
    } as const
}
export const updateNewTextAC =(postText:string)=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:postText
    }as const
}
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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: new Date().getDate(),
                // text: this._state.profilePage.newPostText,
                text: action.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }},
    subscribe(callback) {
        this._callSubscriber = callback
    }

}

export default store;
