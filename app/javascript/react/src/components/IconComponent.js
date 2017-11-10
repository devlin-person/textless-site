import React from 'react';
import { Link } from 'react-router';

const IconComponent = props => {
  return(
      <Link to={props.pic_link} className={props.class}></Link>
  );
};

export default IconComponent;
