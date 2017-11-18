import React from 'react'

class SlideshowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      slideshowImages: [
        require("../images/birds/bird1.jpg"),
        require("../images/cats/cat1.jpg"),
        require("../images/buildings/building1.jpg"),
        require("../images/dogs/dog1.jpg"),
        require("../images/food/food1.jpg"),
        require("../images/people/people1.jpg"),
        require("../images/scenery/scenery1.jpg"),
      ]
    };
    this.next = this.next.bind(this);
  };

  next() {
    if (this.state.index == this.state.slideshowImages.length - 1) {
      this.setState({index: 0});
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  componentDidMount() {
    setInterval(() => {this.next()}, 5000);
  };

  render() {
    //
    // var displayedSlide = this.state.slideshowImages[Math.floor(Math.random()*this.state.slideshowImages.length)]

    return(
      <div className="container photoScroll">
        <img className="slideshowPicture" src={this.state.slideshowImages[this.state.index]}/>
      </div>
    )
  }
}

export default SlideshowContainer
