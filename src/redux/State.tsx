import React from "react";

export type StateType = {
    profilePage: {
        posts: Array<PostDataType>
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

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, text: "how do you like my social network?", likesCount: 7},
            {id: 2, text: "have questions ? ask them on my LinkedIn", likesCount: 48}
        ]
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

}
