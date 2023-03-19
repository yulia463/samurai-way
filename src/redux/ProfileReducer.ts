import {PostDataType} from "./DialogsReducer";
import {ActionsTypes} from "./ActionsType";

let initialState = {
    posts: [
        {id: 1, text: "how do you like my social network?", likesCount: 7},
        {id: 2, text: "have questions ? ", likesCount: 48},
        {id: 3, text: " ask them on my LinkedIn", likesCount: 0}
    ],
    newPostText: ""
};
 export type ProfilePagesType = {
     posts: Array<PostDataType>
     newPostText: string
 }

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
};
export const profileReducer = (state: ProfilePagesType = initialState, action: ActionsTypes): ProfilePagesType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: new Date().getDate(),
                // text: this._state.profilePage.newPostText,
                text: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ""
           return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
          return state
        default: return state
    }
    return state
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