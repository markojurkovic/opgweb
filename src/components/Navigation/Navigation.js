import React, { Component } from "react";
import "./Navigation.css";
import FBIcon from "../../assets/F_icon.svg";
import OPGLogo from "../../assets/logo-s.png";
import FBIconBW from "../../assets/F_icon_bw.png";
import Hamburger from "../../assets/hamburger.png";

class Navigation extends Component {
  render() {
    return (
      <nav id="navbar">
        <div id="logoMenuContainer">
          <img id="opg-logo" src={OPGLogo} alt="OPG logo" />
          <img id="hamburgerImage" src={Hamburger} />
        </div>
        <ul id="navItems">
          <li className="navItem" id="navNovosti">
            Novosti
          </li>
          <li className="navItem" id="navBiljke">
            Biljke
          </li>
          <li className="navItem" id="navProizvodi">
            Proizvodi
          </li>
          <li className="navItem" id="navOopgu">
            O OPG-u
          </li>
          <li className="navItem" id="navKontakt">
            Kontakt
          </li>
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
