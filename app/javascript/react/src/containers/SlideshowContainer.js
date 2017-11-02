import React from 'react'
import PictureComponent from "../components/PictureComponent"

class SlideshowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bird_collection: {},
      building_collection: {},
      cat_collection: {},
      dog_collection: {},
      food_collection: {},
      people_collection: {},
      scenery_collection: {}
    }
  }

  render() {
    var slideshowImages = [
      ("../images/birds/bird1.jpg"),
      ("../images/cats/cat1.jpg"),
      ("../images/buildings/building1.jpg"),
      ("../images/dogs/dog1.jpg"),
      ("../images/food/food1.jpg"),
      ("../images/people/people1.jpg"),
      ("../images/scenery/scenery1.jpg"),
    ]
    var displayedSlide = slideshowImages[Math.floor(Math.random()*slideshowImages.length)]
    debugger;
    return(
      <div id="container">
        {/* <PictureComponent
          class="pic"
          picture={require({displayedSlide})}
        /> */}
        <PictureComponent
          class="pic"
          picture={require("../images/birds/bird1.jpg")}
        />
      </div>
    )
  }
}

export default SlideshowContainer
