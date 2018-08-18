import React, { Component } from "react";
import "../../App.css";
import "./Home.css";
import Jumbotron from "../Jumbotron/Jumbotron";
import AOS from "aos";
import WelcomeBgImg from "../../assets/meadow-crop.jpg";
import ProductsBgImg from "../../assets/lavender-jumbotron2-edit.jpg";
import { NavLink } from "react-router-dom";

class Home extends Component {
  componentDidMount = () => {
    document.title = "OPG Marica - Dobrodošli";
    AOS.init({
      once: true,
      duration: 800,
      offset: 20
    });
  };
  render() {
    return (
      <div className="container">
        <Jumbotron bgImg={WelcomeBgImg} addClasses="homeJumbotron">
          <h1>Dobrodošli na OPG Marica</h1>
        </Jumbotron>

        <Jumbotron
          addClasses="homeJumbotron"
          bgImg={ProductsBgImg}
          linkId="proizvodiLink"
          linkHoverColor="#c790f1"
        >
          <h2>Snaga koja pospješuje ozdravljenje nalazi se u prirodi</h2>
          <div>
            <NavLink to="/products" id="proizvodiLink" href="#">
              Biljke i proizvodi
            </NavLink>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
