import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetchingAC, toggleIsFollowingProgressAC, unfollow,
    UserType
} from "../../redux/UsersReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../Api/Api";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleIsFollowingProgressAC:(isFetching: boolean)=>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    followingInProgress: (isFetching: boolean) => void

}
export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }

}

class UsersContainer extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setUsers(data.items)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetchingAC(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsers(data.items);

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
                       followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }
}


export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetchingAC, toggleIsFollowingProgressAC
    })(UsersContainer);

