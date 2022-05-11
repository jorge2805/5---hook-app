import React from 'react'
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">HooksApp</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/CounterApp">CounterApp</NavLink>
                <NavLink className="nav-link" to="/CounterWithCustomHook">CounterWithCustomHook</NavLink>
                <NavLink className="nav-link" to="/SimpleForm">SimpleForm</NavLink>
                <NavLink className="nav-link" to="/FormWithCustomHook">FormWithCustomHook</NavLink>
                <NavLink className="nav-link" to="/MultipleCustomHooks">MultipleCustomHooks</NavLink>
            </div>
            </div>
        </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/FocusScreen">FocusScreen</NavLink>
                <NavLink className="nav-link" to="/RealExampleRef">RealExampleRef</NavLink>
                <NavLink className="nav-link" to="/LayoutEffetct">LayoutEffetct</NavLink>
                <NavLink className="nav-link" to="/Memorize">Memorize</NavLink>
                <NavLink className="nav-link" to="/MemoHook">MemoHook</NavLink>
                <NavLink className="nav-link" to="/CallbackHook">CallbackHook</NavLink>
                <NavLink className="nav-link" to="/Father">Father</NavLink>
                <NavLink className="nav-link" to="/TodoApp">TodoApp</NavLink>
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}