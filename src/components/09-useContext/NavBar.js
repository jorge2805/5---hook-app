import React from 'react'
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink activeClassname='active' className="nav-link" aria-current="page" to="/">Home</NavLink>
                <NavLink activeClassname='active' className="nav-link" to="/About">About</NavLink>
                <NavLink activeClassname='active' className="nav-link" to="/Login">Login</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}