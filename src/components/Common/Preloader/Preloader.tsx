import React from "react";
import preLoader from "../../Users/images/hearts.svg";

export const Preloader=()=>{
    return(
        <div style={{backgroundColor: 'black'}}>
            <img src={preLoader} alt={'loading'}/>
        </div>
    )
}