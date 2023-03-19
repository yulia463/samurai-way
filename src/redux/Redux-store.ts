import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


let reducers = combineReducers({
    profileReducer,
    dialogsReducer
});
let store = createStore(reducers);
export type storeType = typeof store
export default store;