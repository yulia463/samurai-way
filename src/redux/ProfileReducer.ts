import {PostDataType} from "./DialogsReducer";
import {ActionsTypes} from "./ActionsType";

export type InitialStateProfileType = typeof initialState;

let initialState = {
    posts: [
        {id: 1, text: "how do you like my social network?", likesCount: 7},
        {id: 2, text: "have questions ? ", likesCount: 48},
        {id: 3, text: " ask them on my LinkedIn", likesCount: 0}
    ] as Array<PostDataType>,
    newPostText: ""
};





export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionsTypes): InitialStateProfileType => {
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