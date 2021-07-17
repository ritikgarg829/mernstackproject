import React from 'react'
import {NavLink} from "react-router-dom";

const Errorpage = () => {
    return (
        <>
        <div id="notfound">
        <div className="notfound">
        <div className="notfound-404">
        <h1>404</h1>
        </div>
        <h2> WE are sorry page not found! </h2>
        <p className="mb-5">
         The page you are looking might have been removed ad its name changed or 
         is temporarily unavailable.
         </p>
         <NavLink className="homebtn" to="/"> Back to Homepage </NavLink>
         
        </div>
        </div>
            
        </>
    )
}

export default Errorpage
