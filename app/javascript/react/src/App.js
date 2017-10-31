import React from 'react';

const App = props => {
  return(
    <div>
      <h1>Textless Site</h1>
      <div className="photoScroll">
        <h4>photos</h4>
      </div>
      <div className="icon-list">
        <i class="flaticon-black icon cat"></i>
        <i class="flaticon-animals icon dog"></i>
        <i class="flaticon-dove icon bird"></i>
        <i class="flaticon-users-group icon people"></i>
        <i class="flaticon-drink icon food"></i>
        <i class="flaticon-mountain icon scenery"></i>
        <i class="flaticon-city icon buliding"></i>
      </div>
    </div>
  )
}

export default App
