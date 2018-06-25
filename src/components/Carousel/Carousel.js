import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Carousel extends Component {
  render() {
    return (
      <Slider {...this.props.settings}>{this.props.children}</Slider>
    );
  }
}

export default Carousel;
