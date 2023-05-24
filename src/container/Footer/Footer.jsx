import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { OurInfo } from './OurInfo';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <OurInfo link={"contact"} h1={"Contact Us"} text1={"9 W 53rd St, New York, NY 10019, USA"} 
      text2={"+1 212-344-1230"} text3={"+1 212-555-1230"}/>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon"/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <OurInfo link={"work"} h1={"Working Hours"} text1={"Monday-Friday:"} 
      text2={"08:00 am - 12:00 am"} text3={"Saturday-Sunday:"} text4={"07:00 am - 11:00 pm"} />
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;