import React, { Component } from "react";
import "./GridItem.css";

class GridItem extends Component {
  render() {
    return (
      <div className="gridItem animated fadeIn">
        <div
          className="imageDiv"
          id={this.props.imageDivId}
          style={{ backgroundImage: `url(${this.props.bgImg})` }}
        />
        <h4>{this.props.divText}</h4>
      </div>
    );
  }
}

export default GridItem;
