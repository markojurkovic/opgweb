import React, { Component } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import MarigoldImg from "../../assets/herbs_marigold.jpg";
import LavenderImg from "../../assets/herbs_lavender.jpg";
import BasilImg from "../../assets/herbs_basil.jpg";
import SageImg from "../../assets/herbs_sage.jpg";
import RosemaryImg from "../../assets/herbs_rosemary.jpg";
import ThymeImg from "../../assets/herbs_thyme.jpg";
import OtherImg from "../../assets/herbs_other.jpg";
import "./Herbs.css";
import AOS from "aos";
import { Link } from "react-router-dom";

class Herbs extends Component {
  componentDidMount = () => {
    document.title = "OPG Marica - Biljke i proizvodi";
    window.scrollTo(0, 0);
    AOS.init({
      once: true,
      offset: 20,
      duration: 800
    });
  };
  render() {
    return (
      <div className="container">
        <Jumbotron
          bgImg={MarigoldImg}
          addClasses="herbJumbotron"
          linkId="herbsMarigoldLink"
          linkHoverColor="#f7bc4f"
        >
          <div className="herbName">
            <h2>Neven</h2>
          </div>
          <div className="herbTagline">
            <h3>Mali sat</h3>
          </div>
          <div className="herbReadMoreLink">
            <Link to="/herbinfo/neven" id="herbsMarigoldLink" href="#">
              Više
            </Link>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsMarigoldLink" href="#">
              Proizvodi
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={LavenderImg}
          addClasses="herbJumbotron"
          linkId="herbsLavenderLink"
          linkHoverColor="#cc75f9"
        >
          <div className="herbName">
            <h2>Lavanda</h2>
          </div>
          <div className="herbTagline">
            <h3>Mediteranska kraljica</h3>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsLavenderLink" href="#">
              Više
            </a>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsLavenderLink" href="#">
              Proizvodi
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={BasilImg}
          addClasses="herbJumbotron"
          linkId="herbsBasilLink"
          linkHoverColor="#4baf2f"
        >
          <div className="herbName">
            <h2>Bosiljak</h2>
          </div>
          <div className="herbTagline">
            <h3>Basilico</h3>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsBasilLink" href="#">
              Više
            </a>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsBasilLink" href="#">
              Proizvodi
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={SageImg}
          addClasses="herbJumbotron"
          linkId="herbsSageLink"
          linkHoverColor="#26a07c"
        >
          <div className="herbName">
            <h2>Kadulja</h2>
          </div>
          <div className="herbTagline">
            <h3>Antički simbol</h3>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsSageLink" href="#">
              Više
            </a>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsSageLink" href="#">
              Proizvodi
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={RosemaryImg}
          addClasses="herbJumbotron"
          linkId="herbsRosemaryLink"
          linkHoverColor="#129e37"
        >
          <div className="herbName">
            <h2>Ružmarin</h2>
          </div>
          <div className="herbTagline">
            <h3>Morska rosa</h3>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsRosemaryLink" href="#">
              Više
            </a>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsRosemaryLink" href="#">
              Proizvodi
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={ThymeImg}
          addClasses="herbJumbotron"
          linkId="herbsThymeLink"
          linkHoverColor="#2acc68"
        >
          <div className="herbName">
            <h2>Timijan</h2>
          </div>
          <div className="herbTagline">
            <h3>Majčina dušica</h3>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsThymeLink" href="#">
              Više
            </a>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsThymeLink" href="#">
              Proizvodi
            </a>
          </div>
        </Jumbotron>

        <Jumbotron
          bgImg={OtherImg}
          addClasses="herbJumbotron"
          linkId="herbsOtherLink"
          linkHoverColor="#71b551"
        >
          <div className="herbName">
            <h2>Ostale biljke</h2>
          </div>
          <div className="herbTagline">
            <h3>Celer, menta...</h3>
          </div>
          <div className="herbReadMoreLink">
            <a id="herbsOtherLink" href="#">
              Više
            </a>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Herbs;
