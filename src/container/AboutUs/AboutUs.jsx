import React from 'react';
import { TextBlock } from './TextBlock';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <TextBlock clas={'about'} h1={'About Us'}/>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <TextBlock clas={'history'} h1={'Our History'}/>
    </div>
  </div>
);

export default AboutUs;
