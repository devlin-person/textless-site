import React from 'react';

const PictureComponent = props => {
  return(
    <div className={props.class}>
      <img src={props.picture} />
    </div>
  );
};

export default PictureComponent;
