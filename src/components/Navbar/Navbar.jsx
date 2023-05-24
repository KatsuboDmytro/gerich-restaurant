import React from 'react';
import images from '../../constants/images';
import { navbarLinks } from '../../constants/data'
import { Burger } from './Burger'
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className='app__navbar'> 
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht-logo" />
      </div>
      <ul className="app__navbar-links">
        {
          navbarLinks.map((item, index) => (
            <li className="p__opensans" key={index}><a href={`#${item.title.toLowerCase()}`}>{item.title}</a></li>
          ))
        }
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <Burger />
    </nav>
  );
};

export default Navbar;
