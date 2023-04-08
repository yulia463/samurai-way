import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/UsersReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

class UsersContainer extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsers(response.data.items);

            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       totalUsersCount={this.props.totalUsersCount}

                />
            </>

        )
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetchingAC: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

