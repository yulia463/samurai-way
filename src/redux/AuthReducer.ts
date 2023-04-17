const enum ActionTypeT {
    SET_USER_DATA = 'SET_USER_DATA',
}

export let initialState: InitialStateType = {
    userId: null,
    login: null,
}
export type InitialStateType = {}
export type ActionType =
    ReturnType<typeof setUserDataAC>


export const AuthReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ActionTypeT.SET_USER_DATA : {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
};

export const setUserDataAC = (userID: number, email: any, login: string) => ({
    type: ActionTypeT.SET_USER_DATA,
    data: {
        userID,
        email,
        login
    }

} as const)

