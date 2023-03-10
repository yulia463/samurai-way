import {ActionsTypes, ProfilePagesType, StoreType} from "./State";


export const profileReducer = (state: ProfilePagesType, action: ActionsTypes): ProfilePagesType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: new Date().getDate(),
                // text: this._state.profilePage.newPostText,
                text: action.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost)
            state.newPostText = ""
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }
    return state
}