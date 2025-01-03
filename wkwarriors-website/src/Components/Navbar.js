import React from 'react';
import { menuItemsData } from '../menuItemsData';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <div className="nav-area">
        <ul className="menus">
          {menuItemsData.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
        <div className="social-icons">
          <Link to="/contact">
            <i className="far fa-envelope"></i>
          </Link>
          <a href="https://www.instagram.com/warriorswk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@warriorswk" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
