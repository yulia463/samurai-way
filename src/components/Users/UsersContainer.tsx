import React from "react";
import {connect} from "react-redux";
import {
    getUsersTC,
    setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetchingAC,
    toggleIsFollowingProgressAC,
    UserType, follow, unfollow
} from "../../redux/UsersReducer";
import {AppStateType} from "../../redux/Redux-store";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType & { ownProps: any }
type MapDispatchToPropsType = {
    acceptFollow: (userId: number) => void
    acceptUnFollow: (userId: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
   // toggleIsFollowingProgressAC: (isFetching: boolean, id: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void

}
export const mapStateToProps = (state: AppStateType,ownProps: any): MapStateToPropsType => {
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

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       acceptUnFollow={this.props.acceptUnFollow}
                       acceptFollow={this.props.acceptFollow}
                       totalUsersCount={this.props.totalUsersCount}
                       followingInProgress={this.props.followingInProgress}
                       toggleIsFollowingProgressAC={toggleIsFollowingProgressAC}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}

                />
            </>

        )
    }
}

let withRedirect = WithAuthRedirect(UsersContainer)
export default connect(mapStateToProps,
    {
        getUsersTC,
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgressAC,
        setUsers,
        setTotalUsersCount,
        toggleIsFetchingAC,
    })(UsersContainer);

