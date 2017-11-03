import React from 'react';

const PictureComponent = props => {
  return(
    <img className={props.class} src={props.picture} />
  );
};

export default PictureComponent;
