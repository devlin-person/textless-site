import React from "react";
import IconComponent from "../components/IconComponent"
import { Link } from 'react-router';

class IconsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    var cat_display = require("../images/cats/cat1.jpg")
    var dog_display = require("../images/dogs/dog1.jpg")
    var bird_display = require("../images/birds/bird1.jpg")
    var people_display = require("../images/people/people1.jpg")
    var food_display = require("../images/food/food1.jpg")
    var scenery_display = require("../images/scenery/scenery1.jpg")
    var building_display = require("../images/buildings/building1.jpg")

    return(
      <div className="icon-list">
        <IconComponent
          class="flaticon-black icon cat"
          // displayPicture={cat_display}
          // pic_link="/cat_photo"
          test="test"
        />
        <IconComponent
          class="flaticon-animals icon dog"
          // displayPicture={dog_display}
          // pic_link="/dog_photo"
        />
        <IconComponent
          class="flaticon-dove icon bird"
          // displayPicture={bird_display}
          // pic_link="/bird_photo"
        />
        <IconComponent
          class="flaticon-users-group icon people"
          // displayPicture={people_display}
          // pic_link="/people_photo"
        />
        <IconComponent
          class="flaticon-drink icon food"
          // displayPicture={food_display}
          // pic_link="/food_photo"
        />
        <IconComponent
          class="flaticon-mountain icon scenery"
          // displayPicture={scenery_display}
          // pic_link="/scenery_photo"
        />
        <IconComponent
          class="flaticon-city icon buliding"
          // displayPicture={building_display}
          // pic_link="/building_photo"
        />
      </div>
    )
  }
}

export default IconsContainer
