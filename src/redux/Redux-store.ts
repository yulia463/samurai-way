import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";


export let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer
});

//export type storeType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;

const _store = {
    state: {
        profileReducer: {
            posts: [],
            newPostText: '',
            profile: {}
        },
        dialogsReducer: {},
        usersPage: {}
    },
    subscriber: () => {
    },
    dispatch: () => {
    }
    //....
}