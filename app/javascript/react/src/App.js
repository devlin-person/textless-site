import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import SlideshowContainer from './containers/SlideshowContainer'
import PicturesContainer from './containers/PicturesContainer'
import IconsContainer from "./containers/IconsContainer"
import NavBar from "./components/NavBar"

const App = props => {
  return(
    <div>
      <NavBar />
      <SlideshowContainer />
      <IconsContainer />
    </div>
    //
    // <Router history={browserHistory}>
    //   <Route path="/" >
    //     <IndexRoute component={PicturesContainer} />
    //     <Route path="pictures/:id" component={PicturesContainer}/>
    //   </Route>
    // </Router>
    //
  )
}

export default App
