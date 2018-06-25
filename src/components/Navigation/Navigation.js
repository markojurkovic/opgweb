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
    if (nav.style.maxHeight === "0px" || !nav.style.maxHeight) {
      nav.style.maxHeight = "800px";
    } else {
      nav.style.maxHeight = "0px";
    }

    let navItems = document.getElementsByClassName("navItem");
    for (let i = 0; i < navItems.length; i++) {
      navItems.item(i).style.visibility =
        navItems.item(i).style.visibility === "visible" ? "hidden" : "visible";
    }
  };

  toggleHamburgerColor = e => {
    e.currentTarget.src =
      e.currentTarget.src === Hamburger ? HamburgerHover : Hamburger;
  };

  handleWidthChange = e => {
    let nav = document.getElementById("navItems");
    let navItems = document.getElementsByClassName("navItem");
    if (e.matches) {
      nav.style.maxHeight = "800px";
      for (let i = 0; i < navItems.length; i++) {
        navItems.item(i).style.visibility = "visible";
      }
    } else {
      nav.style.maxHeight = "0px";
      for (let i = 0; i < navItems.length; i++) {
        navItems.item(i).style.visibility = "hidden";
      }
      document.getElementById("hamburgerImage").src = Hamburger;
    }
  };

  componentDidMount = () => {
    let mediaQuery = window.matchMedia("(min-width: 770px");
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
              onClick={e => {
                this.toggleMenu(e);
                this.toggleHamburgerColor(e);
              }}
            />
          </button>
        </div>
        <ul id="navItems">
          <li className="navItem" id="navNovosti">
            <a href="#">Novosti</a>
          </li>
          <li className="navItem" id="navBiljke">
            <a href="#">Biljke</a>
          </li>
          <li className="navItem" id="navProizvodi">
            <a href="#">Proizvodi</a>
          </li>
          <li className="navItem" id="navOopgu">
            <a href="#">O OPG-u</a>
          </li>
          <li className="navItem" id="navKontakt">
            <a href="#">Kontakt</a>
          </li>
          <li id="fbItem">
            <div id="fbImageContainer">
              <a href="https://www.facebook.com/opgmarica/" target="blank">
                <img
                  id="fb-logo"
                  alt="Facebook logo"
                  src={FBIcon}
                  onMouseEnter={e => (e.currentTarget.src = FBIconBW)}
                  onMouseLeave={e => (e.currentTarget.src = FBIcon)}
                />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
