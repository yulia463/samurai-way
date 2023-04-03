import React from "react";
import styles from '../../redux/users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage} &count=${this.props.usersPage.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber: number) => {
        // @ts-ignore
        this.props.usersPage.currentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalUsersCount);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (<div>
                <div>
                    {pages.map((el) => {
                        return <span
                            className={this.props.usersPage.currentPage === el ? styles.selectedPage : ""}
                            onClick={(e) => {
                                this.onPageChanged(el)
                            }}>{el}</span>
                    })}

                </div>
                <div>
                    {this.props.usersPage.users.map(u => <div className={styles.userCard} key={u.id}>
                        <img alt={'photo not found'}
                             src={u.photos.small !== null ? u.photos.small : 'https://abrakadabra.fun/uploads/posts/2021-12/1638968482_1-abrakadabra-fun-p-grustnii-pepe-1.png'}
                             className={styles.userPhoto}/>
                        <div className={styles.buttonFollow}>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Follow</button>}

                        </div>
                        <span className={styles.nameAndStatus}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                    </div>)}
                </div>
            </div>
        )
    }
}

export default Users;
