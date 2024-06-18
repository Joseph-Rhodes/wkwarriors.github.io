import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 115px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 12;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 0px;
  img {
    height: 80px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    margin-right: 20px;
    font-size: 2rem;
    
  }
`;

export const CloseIcon = styled(FaTimes)`
  display: none;
  color: white;
  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Sidebar = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    padding-top: 60px;
    z-index: 10;
    transition: 0.3s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 25px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    align-items: flex-start;
  }
`;

export const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 5px); /* Position it directly below the parent link */
  left: 0;
  background: black;
  z-index: 10;
`;

export const DropdownItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  white-space: nowrap;
  &:hover {
    font-weight: bold;
    font-size: 1.6rem;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 25%;
    background-color: white;
    visibility: hidden;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    visibility: visible;
    width: 50%;
    left: 25%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
`;
