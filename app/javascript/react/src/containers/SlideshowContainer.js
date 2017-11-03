import React from 'react'
import PictureComponent from "../components/PictureComponent"

class SlideshowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var slideshowImages = [
      require("../images/birds/bird1.jpg"),
      require("../images/cats/cat1.jpg"),
      require("../images/buildings/building1.jpg"),
      require("../images/dogs/dog1.jpg"),
      require("../images/food/food1.jpg"),
      require("../images/people/people1.jpg"),
      require("../images/scenery/scenery1.jpg"),
    ]
    var displayedSlide = slideshowImages[Math.floor(Math.random()*slideshowImages.length)]
    return(
      <div id="container" className="photoScroll">
         <PictureComponent
           class="pic"
           picture={displayedSlide}
         />
      </div>
    )
  }
}

export default SlideshowContainer
