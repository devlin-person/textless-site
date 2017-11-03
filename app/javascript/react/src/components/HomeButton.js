import React from 'react';
import { Link } from 'react-router'

const HomeButton = props => {
  return(
  <Link to="/">
    <i className="home">HomeButton</i>
  </Link>
  )
}

export default HomeButton;
