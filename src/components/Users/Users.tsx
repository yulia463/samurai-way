import React from "react";
import styles from "../../redux/users.module.css";
import {toggleIsFollowingProgressAC, UserType} from "../../redux/UsersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    toggleIsFollowingProgressAC: (isFetching: boolean, id: number) => void
    //lupa
}

export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((el) => {
                    return <span
                        className={props.currentPage === el ? styles.selectedPage : ""}
                        onClick={(e) => {
                            props.onPageChanged(el)
                        }}>{el}</span>
                })}

            </div>
            <div>
                {props.users?.map((u: any) => <div className={styles.userCard} key={u.id}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img alt={'photo not found'}
                             src={u.photos.small !== null ? u.photos.small : 'https://abrakadabra.fun/uploads/posts/2021-12/1638968482_1-abrakadabra-fun-p-grustnii-pepe-1.png'}
                             className={styles.userPhoto}/>
                    </NavLink>
                    <div className={styles.buttonFollow}>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.toggleIsFollowingProgressAC(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "8c1e219f-9ff2-4bd6-a600-b07406352fbd"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleIsFollowingProgressAC(false, u.id)
                                        });

                                }}>Unfollow</button>

                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.toggleIsFollowingProgressAC(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "8c1e219f-9ff2-4bd6-a600-b07406352fbd"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleIsFollowingProgressAC(false, u.id)
                                        });

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