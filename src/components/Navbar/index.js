import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './styles';

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="Signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
