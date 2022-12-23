import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <nav>
    <div classname="menu">
        <ul className="navbar-list">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </div>
  </nav>
}

export default Navbar