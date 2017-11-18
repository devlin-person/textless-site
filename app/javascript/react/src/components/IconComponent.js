import React from 'react';
import { Link } from 'react-router';

class IconComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.test
    }
  }

  render() {
    let test = this.state.test

    return(
      <Link to="/photo_display" className={this.props.class}></Link>
    )
  }
}

export default IconComponent;
