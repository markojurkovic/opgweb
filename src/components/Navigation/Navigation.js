import React, { Component } from "react";
import "./Navigation.css";
import FBIcon from "../../assets/F_icon.svg";
import OPGLogo from "../../assets/logo-s.png";
import FBIconBW from "../../assets/F_icon_bw.png";
import Hamburger from "../../assets/hamburger.png";
import HamburgerHover from "../../assets/hamburger-hover.png";

class Navigation extends Component {
  toggleMenu = () => {
    let nav = document.getElementById("navItems");
    nav.style.display =
      nav.style.display === "flex" ? "none" : "flex";
  };

  toggleHamburgerColor = e => {
    e.currentTarget.src =
      e.currentTarget.src == Hamburger ? HamburgerHover : Hamburger;
  };

  handleWidthChange = () => {
    document.getElementById("navItems").style.display = "flex";
  };

  componentDidMount = () => {
    let mediaQuery = window.matchMedia("(max-width: 770px");
    mediaQuery.addListener(this.handleWidthChange);
  };

  render() {
    return (
      <nav id="navbar">
        <div id="logoMenuContainer">
          <img id="opg-logo" src={OPGLogo} alt="OPG logo" />
          <button>
            <img
              id="hamburgerImage"
              alt="Navigation menu"
              src={Hamburger}
              onMouseEnter={this.toggleHamburgerColor}
              onMouseLeave={this.toggleHamburgerColor}
              onTouchStart={this.toggleHamburgerColor}
              onClick={this.toggleMenu}
            />
          </button>
        </div>
        <ul id="navItems">
          <a href="#">
            <li className="navItem" id="navNovosti">
              Novosti
            </li>
          </a>
          <a href="#">
            <li className="navItem" id="navBiljke">
              Biljke
            </li>
          </a>
          <a href="#">
            <li className="navItem" id="navProizvodi">
              Proizvodi
            </li>
          </a>
          <a href="#">
            <li className="navItem" id="navOopgu">
              O OPG-u
            </li>
          </a>
          <a href="#">
            <li className="navItem" id="navKontakt">
              Kontakt
            </li>
          </a>
          <li id="fbItem">
            <a
              href="https://www.facebook.com/opgmarica/"
              target="blank"
            >
              <img
                id="fb-logo"
                alt="Facebook logo"
                src={FBIcon}
                onMouseEnter={e => (e.currentTarget.src = FBIconBW)}
                onMouseLeave={e => (e.currentTarget.src = FBIcon)}
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
