import React from "react";
import styles from "../../redux/users.module.css";
import {UserType} from "../../redux/UsersReducer";
import {NavLink} from 'react-router-dom';

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
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
                            ? <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
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