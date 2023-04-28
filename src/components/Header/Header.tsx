import React from "react";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
export const Header = (props: HeaderPropsType) => {
    console.log(props)
    return (
        <header>
            <img alt={'profile avatar'}
                 src={"https://images-platform.99static.com/UqQd8cNtjC7YzAQmbuFUTjn9z4c=/0x0:1654x1654/500x500/top/smart/99designs-contests-attachments/108/108129/attachment_108129887"}/>
            <div className='loginBlock'>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}> Login </NavLink>
            }
            </div>


        </header>
    )
}
