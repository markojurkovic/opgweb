import React, { Component } from "react";
import "../../App.css";
import "./Home.css";
import HerbsJumbotronBg from "../../assets/marigold-edit.jpg";
import TaglineJumbotronBg from "../../assets/lavender-jumbotron2-edit.jpg";
import WelcomeJumbotronBg from "../../assets/meadow-crop.jpg";
import Jumbotron from "../Jumbotron/Jumbotron";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron bgImg={WelcomeJumbotronBg}>
          <h1>Dobrodošli na OPG Marica</h1>
        </Jumbotron>

        <Jumbotron
          bgImg={TaglineJumbotronBg}
          linkId="proizvodiLink"
          linkHoverColor="#F2BFEE"
        >
          <h2>Snaga koja pospješuje ozdravljenje nalazi se u prirodi</h2>
          <div>
            <a id="proizvodiLink" href="#">
              Pogledaj proizvode
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={HerbsJumbotronBg}
          linkId="biljkeLink"
          linkHoverColor="#997DF2"
        >
          <h2>Jeste li znali da je neven zapravo mali sat?</h2>
          <div>
            <a id="biljkeLink" href="#">
              Više o biljkama
            </a>
          </div>
        </Jumbotron>

        <Footer />
      </div>
    );
  }
}

export default Home;
