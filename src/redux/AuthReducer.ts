const enum ActionTypeT {
    SET_USER_DATA = 'SET_USER_DATA',
}

export let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}
export type InitialStateType = {
    userId: string | null,
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
                isAuth: true
            };
        }
        default:
            return state;
    }
};

export const setAuthUserDataAC = (userID: number, email: string, login: string) => ({
    type: ActionTypeT.SET_USER_DATA,
    data: {
        userID,
        email,
        login
    }
} as const)


