/*
PROPS:

additionalClasses - classes to be added to returned jumbotron in addition to 'jumbotron'

bgImg - background image

linkHoverColor - hover color for link inside the jumbotron

linkId - id of the link, necessary for styling link color

*/

import React, { Component } from "react";
import "./Jumbotron.css";
import "../../../node_modules/aos/dist/aos";

class Jumbotron extends Component {
  componentDidMount = () => {
    if (this.props.linkId && this.props.linkHoverColor) {
      let linkHover = document.createElement("style");
      linkHover.innerHTML = `#${this.props.linkId}:hover {color: ${
        this.props.linkHoverColor
      }}`;
      document.body.appendChild(linkHover);
    }
  };
  render() {
    return (
      <div
        data-aos="fade-in"
        className={`jumbotron ${this.props.addClasses}`}
        style={{
          ...this.props.style,
          backgroundImage: `url(${this.props.bgImg})`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;
