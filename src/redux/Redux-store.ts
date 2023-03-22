import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


export let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer
});

export type storeType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

//window.store = store;
export default store;