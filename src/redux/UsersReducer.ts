// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';

const enum ActionTypeT {
    FOLLOW = 'FOLLOW hello wo',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
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
export type UserLocationType = {
    city: string,
    country: string
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type ActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>



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

        default:
            return state;
    }
};

// let initialState:InitialStateType = {
//     users: [
//         {
//             id: 1,
//             fullName: "Claudia Tiedemann",
//             followed: true,
//             status: 'traveler',
//             photoUrl:'https://static.wikia.nocookie.net/dark-netflix/images/6/6e/JulikaJenkinsTwitter.jpeg/revision/latest?cb=20190826175537',
//             location: {city: "Winden", country: "Germany"}
//         },
//         {
//             id: 2,
//             fullName: "Ulrich  Nielsen",
//             followed: false,
//             status: 'psycho',
//             photoUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c6/AV0A3487_Oliver_Masucci_%282%29.jpg',
//             location: {city: "Winden", country: "Germany"}
//         },
//         {
//             id: 3,
//             fullName: "Helge Doppler",
//             followed: true,
//             status: 'doctor',
//             photoUrl:'https://pbs.twimg.com/media/EboK1dTWoAABszF.jpg',
//             location: {city: "Winden", country: "Germany"}
//         },
//         {
//             id: 4,
//             fullName: "Martha Nielsen",
//             followed: false,
//             status: 'sister',
//             photoUrl:'https://64.media.tumblr.com/3a6e21a89f779ac065c6803065943dd4/tumblr_p4wdoeurMe1wkxnj3o1_400.png',
//             location: {city: "Winden", country: "Germany"}
//         },
//     ]
// };

export const followAC = (userID: number) => ({type: ActionTypeT.FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: ActionTypeT.UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: ActionTypeT.SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: ActionTypeT.SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: ActionTypeT.SET_USERS_TOTAL_COUNT, totalCount} as const)