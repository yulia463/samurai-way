import React from "react";
import styles from '../../redux/users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";

class UsersAPIComponent extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber: number) => {
         this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    }

    render() {

        return (
            <Users users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   totalUsersCount={this.props.totalUsersCount}

            />

        )
    }
}

export default UsersAPIComponent;
