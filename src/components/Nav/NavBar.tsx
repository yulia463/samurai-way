import React from "react";
import Styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return (
        <nav className={Styles.nav}>
            <div className={Styles.item}><NavLink to={'/profile'} activeClassName={Styles.active}>Profile</NavLink></div>
            <div className={Styles.item}><NavLink to={'/dialogs/'} activeClassName={Styles.active}>Messages</NavLink></div>
            <div className={Styles.item}><NavLink to={'/news'} activeClassName={Styles.active}>News</NavLink></div>
            <div className={Styles.item}><NavLink to={'/music'} activeClassName={Styles.active}>Music</NavLink></div>
            <div className={Styles.item}><NavLink to={'/settings'} activeClassName={Styles.active}>Settings</NavLink></div>
            <div className={Styles.item}><NavLink to={'/users'} activeClassName={Styles.active}>Users</NavLink></div>
        </nav>
    )
};
