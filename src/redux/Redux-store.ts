import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

export let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer
});

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;

