import React from "react";
import preLoader from "../../Users/images/hearts.svg";

export const Preloader = () => {
    return (
        <div style={{backgroundColor: '#65bfbf',width:'20px',height:'30px'}}>
            <img src={preLoader} alt={'loading'}/>
        </div>
    )
}