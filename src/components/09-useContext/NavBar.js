import React from 'react'
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/About">About</NavLink>
                <NavLink className="nav-link" to="/Login">Login</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}