import React from "react";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: (value: any) => void
    //  login: string | null
    logout: () => void
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header>
            <img alt={'profile avatar'}
                 src={"https://images-platform.99static.com/UqQd8cNtjC7YzAQmbuFUTjn9z4c=/0x0:1654x1654/500x500/top/smart/99designs-contests-attachments/108/108129/attachment_108129887"}/>
            <div className='loginBlock'>
                {props.isAuth
                    ? <div>{props.login} --------- <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}> Login </NavLink>
                }
            </div>


        </header>
    )
}
