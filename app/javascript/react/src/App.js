import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import SlideshowContainer from './containers/SlideshowContainer'
import PicturesContainer from './containers/PicturesContainer'
import IconsContainer from "./containers/IconsContainer"

const App = props => {
  return(
    <div>
      <SlideshowContainer />
      <IconsContainer />
    </div>
  )
}

export default App
