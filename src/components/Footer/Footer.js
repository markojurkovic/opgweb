import React, { Component } from "react";
import "./Footer.css";
import PhoneImage from "../../assets/phone.png";
import EmailImage from "../../assets/email.png";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footerContainer">
          <div id="footerAbout">
            <h4>OPG Marica</h4>
            <p>
              OPG Marica bavi se preradom i uzgojem ljekovitog bilja, a izrađuje
              proizvode od nevena, lavande, bosiljka, ružmarina, kadulje i
              drugog ljekovitog i začinskog bilja.
            </p>
          </div>
          <div id="footerContact">
            <h4>Kontakt</h4>
            <div class="footerContactMethod">
              <img class="footerContactIcon" src={PhoneImage} alt="Phone" />
              <p>+385 099 506 4489</p>
            </div>
            <div class="footerContactMethod">
              <img class="footerContactIcon" src={EmailImage} alt="Phone" />
              <p>jurkovic.marica@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
