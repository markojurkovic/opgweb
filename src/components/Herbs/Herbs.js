import React, { Component } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./Herbs.css";
import AOS from "aos";
import { Link } from "react-router-dom";

let cachedState = {
  herbsList: null
};

class Herbs extends Component {
  constructor(props) {
    super(props);
    this.state = cachedState;
  }

  componentWillUnmount() {
    cachedState = this.state;
  }

  componentDidMount() {
    let fetchUrl = "/herbsList";
    console.log("Cached state: ", cachedState);
    if (!cachedState.herbsList) {
      fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({
            herbsList: data
          });
        });
    } else {
      this.setState = cachedState;
    }

    document.title = "OPG Marica - Biljke i proizvodi";
    AOS.init({
      once: true,
      offset: 20,
      duration: 800
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.herbsList &&
          this.state.herbsList.map(herbJson => (
            <Jumbotron
              bgImg={`/images/${herbJson.bgImg}`}
              addClasses="herbJumbotron"
              linkId={herbJson.linkId}
              linkHoverColor={herbJson.linkHoverColor}
            >
              <div className="herbName">
                <h2>{herbJson.herbName}</h2>
              </div>
              <div className="herbTagline">
                <h3>{herbJson.herbTagLine}</h3>
              </div>
              <div className="herbReadMoreLink">
                <Link
                  to={`/herbinfo/${herbJson.herbUrlName}`}
                  id={herbJson.linkId}
                >
                  Više
                </Link>
              </div>
              <div className="herbReadMoreLink">
                <Link
                  to={`/herbinfo/${herbJson.herbUrlName}`}
                  id={herbJson.linkId}
                >
                  Proizvodi
                </Link>
              </div>
            </Jumbotron>
          ))}
      </div>
    );
  }
}

export default Herbs;
