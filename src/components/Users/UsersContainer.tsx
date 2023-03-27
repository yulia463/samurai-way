import React from "react";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../redux/UsersReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import Users from "./Users";

type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType= MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }

}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users);

