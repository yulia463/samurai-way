const enum ActionTypeT {
    FOLLOW = 'FOLLOW hello wo',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
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
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetchingAC>



export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
        case ActionTypeT.SET_USERS : {
            return {...state, users:  action.users}
        }
        case ActionTypeT.SET_CURRENT_PAGE : {
            return {...state,currentPage:action.currentPage}
        }
        case ActionTypeT.SET_USERS_TOTAL_COUNT : {
            return  {...state , totalUsersCount: action.totalUsersCount }
        }
        case ActionTypeT.TOGGLE_IS_FETCHING : {
            return  {...state , isFetching: action.isFetching }
        }

        default:
            return state;
    }
};
export const follow = (userID: number) => ({type: ActionTypeT.FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: ActionTypeT.UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: ActionTypeT.SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: ActionTypeT.SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: ActionTypeT.SET_USERS_TOTAL_COUNT, totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: ActionTypeT.TOGGLE_IS_FETCHING, isFetching} as const)