import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLogo,
  Bars,
  CloseIcon,
  Sidebar,
  NavMenu,
  DropdownMenu,
  DropdownItem,
} from "./NavbarElements";
import { NavLink } from "./NavbarElements"; // Ensure to import the updated NavLink component
import logo from "../Images/wkwLogo.png"; // Adjust path to your logo image

const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    team: false,
    schedule: false,
    news: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdown({ ...dropdown, [menu]: !dropdown[menu] });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      if (window.innerWidth > 800) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdown({
      team: false,
      schedule: false,
      news: false,
    });
  };

  return (
    <Nav>
      <NavLogo to="/" onClick={handleLinkClick}>
        <img src={logo} alt="Logo" />
      </NavLogo>
      {isMobile ? (
        <>
          <Bars onClick={toggleMenu} />
          <Sidebar isOpen={isOpen}>
            <CloseIcon onClick={toggleMenu} />
            <NavMenu>
              <NavLink to="/roster" onClick={() => {toggleDropdown("roster"); handleLinkClick();}}>
                Team
                <DropdownMenu isOpen={dropdown.roster}>
                  <DropdownItem to="/roster" onClick={handleLinkClick}>Roster</DropdownItem>
                  <DropdownItem to="/team/leaders" onClick={handleLinkClick}>Team Leaders</DropdownItem>
                  <DropdownItem to="/team/stats" onClick={handleLinkClick}>Stats</DropdownItem>
                </DropdownMenu>
              </NavLink>
              <NavLink to="/schedule" onClick={() => {toggleDropdown("schedule"); handleLinkClick();}}>
                Schedule
                <DropdownMenu isOpen={dropdown.schedule}>
                  <DropdownItem to="/schedule" onClick={handleLinkClick}>Online Schedule</DropdownItem>
                  <DropdownItem to="/schedule/printable" onClick={handleLinkClick}>Printable Schedule</DropdownItem>
                </DropdownMenu>
              </NavLink>
              <NavLink to="/news" onClick={() => {toggleDropdown("news"); handleLinkClick();}}>
                News
                <DropdownMenu isOpen={dropdown.news}>
                  <DropdownItem to="/news" onClick={handleLinkClick}>Latest News</DropdownItem>
                  <DropdownItem to="/news/pictures" onClick={handleLinkClick}>Pictures</DropdownItem>
                  <DropdownItem to="/news/videos" onClick={handleLinkClick}>Videos</DropdownItem>
                </DropdownMenu>
              </NavLink>
              <NavLink to="/shop" onClick={handleLinkClick}>Shop</NavLink>
            </NavMenu>
          </Sidebar>
        </>
      ) : (
        <NavMenu>
          <NavLink to="/roster" onMouseEnter={() => toggleDropdown("roster")} onMouseLeave={() => toggleDropdown("roster")} onClick={handleLinkClick}>
            Team
            <DropdownMenu isOpen={dropdown.roster}>
              <DropdownItem to="/roster" onClick={handleLinkClick}>Roster</DropdownItem>
              <DropdownItem to="/team/leaders" onClick={handleLinkClick}>Team Leaders</DropdownItem>
              <DropdownItem to="/team/stats" onClick={handleLinkClick}>Stats</DropdownItem>
            </DropdownMenu>
          </NavLink>
          <NavLink to="/schedule" onMouseEnter={() => toggleDropdown("schedule")} onMouseLeave={() => toggleDropdown("schedule")} onClick={handleLinkClick}>
            Schedule
            <DropdownMenu isOpen={dropdown.schedule}>
              <DropdownItem to="/schedule" onClick={handleLinkClick}>Online Schedule</DropdownItem>
              <DropdownItem to="/schedule/printable" onClick={handleLinkClick}>Printable Schedule</DropdownItem>
            </DropdownMenu>
          </NavLink>
          <NavLink to="/news" onMouseEnter={() => toggleDropdown("news")} onMouseLeave={() => toggleDropdown("news")} onClick={handleLinkClick}>
            News
            <DropdownMenu isOpen={dropdown.news}>
              <DropdownItem to="/news" onClick={handleLinkClick}>Latest News</DropdownItem>
              <DropdownItem to="/news/pictures" onClick={handleLinkClick}>Pictures</DropdownItem>
              <DropdownItem to="/news/videos" onClick={handleLinkClick}>Videos</DropdownItem>
            </DropdownMenu>
          </NavLink>
          <NavLink to="/shop" onClick={handleLinkClick}>Shop</NavLink>
        </NavMenu>
      )}
    </Nav>
  );
};

export default Navbar;
