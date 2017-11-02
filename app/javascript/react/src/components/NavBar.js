import React from 'react';
import { Link } from 'react-router'
import HomeButton from './HomeButton'

const NavBar = props => {
  return(
    <div className="navbar">
      <HomeButton />
    </div>
  )
}

export default NavBar;
