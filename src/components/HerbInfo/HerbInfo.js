import React, { Component } from "react";
import "./HerbInfo.css";
import AOS from "aos";

class HerbInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      herbName: "",
      bgImgUrl: "",
      products: [""],
      herbDescription: "",
      requestedHerb: this.props.match.params.herbName
    };
  }

  componentDidMount = () => {
    // Fetch data
    let fetchUrl = `/herbInfo/${this.state.requestedHerb}`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          herbName: data.herbName,
          products: data.products,
          herbDescription: data.herbDescription,
          bgImgUrl: data.imgUrl
        });
        this.updateComponent();
      });
  };

  updateComponent = function() {
    document.title = "OPG Marica - " + this.state.herbName;
    window.scrollTo(0, 0);
    AOS.init({
      once: true,
      duration: 800
    });
  };

  render() {
    return (
      <div data-aos="fade-in">
        <div
          className="jumbotron herbDescriptionJumbotron"
          style={{
            ...this.props.style,
            backgroundImage: `url(${this.state.bgImgUrl})`
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
