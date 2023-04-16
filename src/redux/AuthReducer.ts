const enum ActionTypeT {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
}
export type UserType = {
    id: number,
    name: string,
    followed: boolean,
    status: string,
    photos: {
        small: string,
        large: string
    }
}

export let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching :true
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching :boolean
}
export type ActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>




export const AuthReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ActionTypeT.FOLLOW : {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case ActionTypeT.UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }


        default:
            return state;
    }
};
export const follow = (userID: number) => ({type: ActionTypeT.FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: ActionTypeT.UNFOLLOW, userID} as const)
