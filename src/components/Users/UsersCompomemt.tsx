import React from "react";
// import styles from '../../redux/users.module.css'
// import {UsersPropsType} from "./UsersContainer";
// import axios from "axios";
//
// export const Users = (props: UsersPropsType) => {
//     let getUsers = () => {
//         if (props.usersPage.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//
//                 props.setUsers(response.data.items)
//             });
//
//         }
//     }
//     return (<div>
//             <button onClick={getUsers}>Get users</button>
//             <div>
//                 {props.usersPage.users.map(u => <div className={styles.userCard} key={u.id}>
//                     <img alt={'photo not found'}
//                         src={u.photos.small !== null ? u.photos.small : 'https://abrakadabra.fun/uploads/posts/2021-12/1638968482_1-abrakadabra-fun-p-grustnii-pepe-1.png'}
//                         className={styles.userPhoto}/>
//                     <div className={styles.buttonFollow}>
//                         {u.followed
//                             ? <button onClick={() => {
//                                 props.follow(u.id)
//                             }}>Unfollow</button>
//                             : <button onClick={() => {
//                                 props.unfollow(u.id)
//                             }}>Follow</button>}
//
//                     </div>
//                     <span className={styles.nameAndStatus}>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     {/*<span>*/}
//                     {/*         <div>{'u.location.city'}</div>*/}
//                     {/*         <div>{'u.location.country'}</div>*/}
//
//                     {/*    </span>*/}
//
//                 </div>)}
//             </div>
//         </div>
//     )
// }
