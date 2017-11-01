import React from 'react'

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
        {/* <img src={require("../images/birds/bird1.jpeg")} />
        <img src={require("../images/cats/cat1.jpg")} /> */}
      </div>
    )
  }
}

export default SlideshowContainer
