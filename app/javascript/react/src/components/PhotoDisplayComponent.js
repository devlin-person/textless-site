import React from "react"
import IconComponent from "../components/IconComponent"

class PhotoDisplayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.test
    }
  }

  render() {
    let test = this.state.test
    return(
      <div>
         <h1>Photo</h1>
         <p>{test}</p>
      </div>
    )
  }
}

export default PhotoDisplayComponent
