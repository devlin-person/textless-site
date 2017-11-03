import React from "react";
import IconComponent from "../components/IconComponent"

class IconsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div className="icon-list">
        <IconComponent class="flaticon-black icon cat"  />
        <IconComponent class="flaticon-animals icon dog" />
        <IconComponent class="flaticon-dove icon bird" />
        <IconComponent class="flaticon-users-group icon people" />
        <IconComponent class="flaticon-drink icon food" />
        <IconComponent class="flaticon-mountain icon scenery" />
        <IconComponent class="flaticon-city icon buliding" />
      </div>
    )
  }
}

export default IconsContainer
