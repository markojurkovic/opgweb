/* PROPS:

descriptionBgImg - background image for the main herb description section of the component

herbName - name of the herb

herbDescription - description text for the herb

*/

import React, { Component } from "react";
import "./HerbInfo.css";
import AOS from "aos";

class HerbInfo extends Component {
  constructor(props) {
    super(props);
    this.herb = this.props.match.params.herbName;
    this.state = {
      herbName: null,
      bgImgUrl: null,
      products: [""],
      herbDescription: null
    };
  }

  componentDidMount = () => {
    // Load data
    let herbName = this.herb.charAt(0).toUpperCase() + this.herb.substr(1);
    let herbDescription =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere earum aliquid, sit excepturi quos. Expedita optio fugit ipsam quae harum saepe nisi! Nam provident, eaque ullam eos commodi rerum!";
    let products = ["Krema", "Tinktura", "Etcetera"];

    this.imgName = "marigold-edit.jpg";
    this.bgImgUrl = "/images/marigold-edit.jpg";

    document.title = "OPG Marica - " + herbName;
    window.scrollTo(0, 0);
    AOS.init({
      once: true,
      duration: 800
    });

    this.setState({
      herbName: herbName,
      products: products,
      herbDescription: herbDescription
    });
  };

  render() {
    return (
      <div data-aos="fade-in">
        <div
          className="jumbotron herbDescriptionJumbotron"
          style={{
            ...this.props.style,
            backgroundImage: `url(${this.bgImgUrl})`
          }}
        >
          <h4 className="herbDescriptionName">{this.state.herbName}</h4>
          <p className="herbDescriptionText">{this.state.herbDescription}</p>

          <div className="herbProducts">
            {this.state.products.map(product => {
              return <span className="product">{product}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HerbInfo;
