import {Dispatch} from "redux";
import {usersAPI} from "../Api/Api";

const enum ActionTypeT {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',
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
    isFetching: true,
    followingInProgress: []
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type ActionType =
    ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingProgressAC>


export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
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
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case ActionTypeT.SET_USERS : {
            return {...state, users: action.users}
        }
        case ActionTypeT.SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case ActionTypeT.SET_USERS_TOTAL_COUNT : {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case ActionTypeT.TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        case ActionTypeT.TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }

        default:
            return state;
    }
};
export const acceptFollow = (userID: number) => ({type: ActionTypeT.FOLLOW, userID} as const)
export const acceptUnFollow = (userID: number) => ({type: ActionTypeT.UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: ActionTypeT.SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: ActionTypeT.SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: ActionTypeT.SET_USERS_TOTAL_COUNT,
    totalUsersCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: ActionTypeT.TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgressAC = (isFetching: boolean, id: number) => ({
    type: ActionTypeT.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setUsers(data.items))
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))

        usersAPI.acceptFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(acceptFollow(userId));
                }
                dispatch(toggleIsFollowingProgressAC(false, userId))
            });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.acceptUnFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(acceptUnFollow(userId));
                }
                dispatch(toggleIsFollowingProgressAC(false, userId))
            });
    }
}