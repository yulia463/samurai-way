import React from "react";
import Styles from './Nav.module.css'


const NavBar = () => {

    return (
        <nav className={Styles.nav}>
            <div className={Styles.item}><a>Profile</a></div>
            <div className={Styles.item}><a>Messages</a></div>
            <div className={Styles.item}><a>News</a></div>
            <div className={Styles.item}><a>Music</a></div>
            <div className={Styles.item}><a>Settings</a></div>
        </nav>
    )

};
export default NavBar;