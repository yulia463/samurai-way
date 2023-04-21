import {addPostAC, sendMessageAC, setUserProfileAC, updateNewTextAC} from "./ProfileReducer";
import {updateNewMessageBodyAC} from "./DialogsReducer";

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof setUserProfileAC>