const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            fullName: "Claudia Tiedemann",
            followed: true,
            status: 'traveler',
            location: {city: "Winden", country: "Germany"}
        },
        {
            id: 2,
            fullName: "Ulrich  Nielsen",
            followed: false,
            status: 'psycho',
            location: {city: "Winden", country: "Germany"}
        },
        {
            id: 3,
            fullName: "Helge Doppler",
            followed: true,
            status: 'doctor',
            location: {city: "Winden", country: "Germany"}
        },
        {
            id: 4,
            fullName: "Marta Nielsen",
            followed: false,
            status: 'sister',
            location: {city: "Winden", country: "Germany"}
        },
    ]
};

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW : {
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
        case UNFOLLOW : {
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
        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
};

export const followAC = (userID: any) => ({type: FOLLOW, userID})
export const inFollowAC = (userID: any) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})