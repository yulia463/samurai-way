import React from "react";
import styles from '../../redux/users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

class Users extends React.Component<UsersPropsType,any> {
   constructor(props:any) {
       super(props);
           axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

               this.props.setUsers(response.data.items)
           });
   }
    render() {
        return (<div>

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

//  <button onClick={this.getUsers}>Get users</button>