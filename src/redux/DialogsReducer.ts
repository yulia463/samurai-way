import {ActionsTypes} from "./ActionsType";

export type MessagesDataType = {
    id: number
    text: string
};
export type DialogsDataType = {
    id: number
    name: string
};
export type PostDataType = {
    id: number,
    text: string,
    likesCount: number
};

export type DialogsPagesType = typeof initialState;
let initialState = {
    dialogsData: [
        {id: 1, name: "Yulia"},
        {id: 2, name: "Semen"},
        {id: 3, name: "Evgenia"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Maria"},
        {id: 6, name: "Anastasia"}
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: 1, text: "Hi"},
        {id: 2, text: "Hello"},
        {id: 3, text: "How are you?"},
        {id: 4, text: "Yo"},
    ] as Array<MessagesDataType>,
    newMessageBody: ""
};


export const dialogsReducer = (state: DialogsPagesType  = initialState, action: ActionsTypes): DialogsPagesType => {


    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {...state, newMessageBody: action.body};

        case 'SEND_MESSAGE':
            return {...state,
                messagesData: [...state.messagesData, {id: 1, text: state.newMessageBody}],
                newMessageBody: '',
            }

        default:
            return state;
    }
};
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
};