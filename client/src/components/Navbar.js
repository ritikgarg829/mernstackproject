import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";




const Navbar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg ">
  <div className ="container-fluid">
   <h4 className ="navbar  m-auto"> <i class="fa fa-snowflake-o fa-spin fa-1x"></i> RITIK GARG <i class="fa fa-snowflake-o fa-spin fa-1x"></i> </h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="False" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ml-auto  ">
    
        <li className="nav-item">
          <NavLink className="nav-link" to="/">HOME</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT</NavLink>
        </li> 
         <li className="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/login">LOGIN</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/signup">REGISTRATION</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>    
        </>
    )
}

export default Navbar
