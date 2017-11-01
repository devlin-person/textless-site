import React from 'react';
import SlideshowContainer from './containers/SlideshowContainer'

const App = props => {
  return(
    <div>
      <div className="photoScroll">
        <SlideshowContainer />
      </div>
      <div className="icon-list">
        <i className="flaticon-black icon cat"></i>
        <i className="flaticon-animals icon dog"></i>
        <i className="flaticon-dove icon bird"></i>
        <i className="flaticon-users-group icon people"></i>
        <i className="flaticon-drink icon food"></i>
        <i className="flaticon-mountain icon scenery"></i>
        <i className="flaticon-city icon buliding"></i>
      </div>
    </div>
  )
}

export default App
