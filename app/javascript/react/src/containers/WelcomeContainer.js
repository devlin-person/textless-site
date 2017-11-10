import React from "react";
import PictureComponent from "../components/PictureComponent"
'./containers/WelcomeContainer'
import IconsContainer from "./IconsContainer"
import SlideshowContainer from './SlideshowContainer'

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <SlideshowContainer />
        <IconsContainer />
      </div>
    )
  }
}


export default WelcomeContainer
