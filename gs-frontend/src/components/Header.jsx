import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <NavLink>
        <img src="./images/logo.png" alt="GIANT SIANT"/>
      </NavLink>
      <Navbar />
    </header>
  )
}

export default Header