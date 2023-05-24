import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useToggle } from '../../hooks/useToggle'
import { data } from '../../constants';

export const Burger = () => {
  const [toggleMenu, setToggleMenu] = useToggle(false);

  return (
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {
        toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              {
                data.navbarLinks.map((item, index) => (
                    <li key={index}><a href={`#${item.title.toLowerCase()}`} onClick={() => setToggleMenu(false)}>{item.title}</a></li>
                ))
              }
            </ul>
        </div>
        )
      }
    </div>
  )
}
