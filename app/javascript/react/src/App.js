import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import WelcomeContainer from './containers/WelcomeContainer'
import PhotoDisplayComponent from "./components/PhotoDisplayComponent"


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRoute component={WelcomeContainer} />
        <Route path="/photo_display" component={PhotoDisplayComponent} />
      </Route>
    </Router>

  )
}

export default App
