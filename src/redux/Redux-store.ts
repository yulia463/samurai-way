import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from "./UsersReducer";


export let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersPage:usersReducer
});

//export type storeType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;