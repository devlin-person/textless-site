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
        {/* <Route path="/bird_photo" component={PhotoDisplayComponent} />
        <Route path="/building_photo" component={PhotoDisplayComponent} />
        <Route path="/cat_photo" component={PhotoDisplayComponent} />
        <Route path="/dog_photo" component={PhotoDisplayComponent} />
        <Route path="/food_photo" component={PhotoDisplayComponent} />
        <Route path="/people_photo" component={PhotoDisplayComponent} />
        <Route path="/scenery_photo" component={PhotoDisplayComponent} /> */}
      </Route>
    </Router>

  )
}

export default App
