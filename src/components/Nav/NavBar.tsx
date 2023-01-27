import React from "react";
import Styles from './Nav.module.css'


const NavBar = () => {

    return (
        <nav className={Styles.nav}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )

};
export default NavBar;