import {ActionsTypes, DialogsPagesType, StoreType} from "./State";

export const dialogsReducer = (state: DialogsPagesType, action: ActionsTypes):DialogsPagesType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body;
            break;
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            state.messagesData.push({id: 5, text: body})
            state.newMessageBody = '';
            break;
    }
    return state
}