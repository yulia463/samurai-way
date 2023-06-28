import {Action, AnyAction, Dispatch} from "redux";
import {authAPI} from "../Api/Api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./Redux-store";
import {stopSubmit} from "redux-form";

const enum ActionTypeT {
    SET_USER_DATA = 'SET_USER_DATA',
}

export let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
export type InitialStateType = {
    id: string | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
export type ActionType =
    ReturnType<typeof setAuthUserDataAC>


export const AuthReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ActionTypeT.SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
            };
        }
        default:
            return state;
    }
};

export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: ActionTypeT.SET_USER_DATA,
    data: {
        id,
        email,
        login,
        isAuth
    }
} as const)


export const getAuthUserDataTC = () => (
    dispatch: Dispatch<Action>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
}


export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, AnyAction> => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = response.data.message > 0 ? response.data.message[0] : "some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        });
}

export const logoutTC = (): ThunkAction<void, AppStateType, unknown, AnyAction> => dispatch => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        });
}
