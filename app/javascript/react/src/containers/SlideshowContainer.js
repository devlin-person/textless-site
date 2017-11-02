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
    return(
      <div id="container">
        <PictureComponent
          class="pic"
          picture={require("../images/birds/bird1.jpg")}
        />
        <PictureComponent
          class="pic"
          picture={require("../images/cats/cat1.jpg")}
        />
        <PictureComponent
          class="pic"
          picture={require("../images/buildings/building1.jpg")}
        />
        <PictureComponent
          class="pic"
          picture={require("../images/dogs/dog1.jpg")}
        />
        <PictureComponent
          class="pic"
          picture={require("../images/food/food1.jpg")}
        />
        <PictureComponent
          class="pic"
          picture={require("../images/people/people1.jpg")}
        />
        <PictureComponent
          class="pic"
          picture={require("../images/scenery/scenery1.jpg")}
        />
      </div>
    )
  }
}

export default SlideshowContainer
