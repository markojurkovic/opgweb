import React, { Component } from "react";
import "./HerbsGrid.css";
import Marigold from "../../assets/marigold-2666877.jpg";
import GridItem from "../GridItem/GridItem";

class HerbsGrid extends Component {
  render() {
    return (
      <div className="gridContainer">
        <GridItem
          imageDivId="marigold"
          bgImg={Marigold}
          divText="Marigold"
        />
        <GridItem
          imageDivId="marigold"
          bgImg={Marigold}
          divText="Marigold"
        />
        <GridItem
          imageDivId="marigold"
          bgImg={Marigold}
          divText="Marigold"
        />
        <GridItem
          imageDivId="marigold"
          bgImg={Marigold}
          divText="Marigold"
        />
        <GridItem
          imageDivId="marigold"
          bgImg={Marigold}
          divText="Marigold"
        />
        <GridItem
          imageDivId="marigold"
          bgImg={Marigold}
          divText="Marigold"
        />
      </div>
    );
  }
}

export default HerbsGrid;
