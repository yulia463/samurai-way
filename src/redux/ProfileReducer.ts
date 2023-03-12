import {ActionsTypes, ProfilePagesType, StoreType} from "./State";


 let initialState = {
    posts: [
        {id: 1, text: "how do you like my social network?", likesCount: 7},
        {id: 2, text: "have questions ? ", likesCount: 48},
        {id: 3, text: " ask them on my LinkedIn", likesCount: 0}
    ],
    newPostText: ""
};

export const profileReducer = (state: ProfilePagesType = initialState, action: ActionsTypes): ProfilePagesType => {
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
        default: return state
    }
    return state
};