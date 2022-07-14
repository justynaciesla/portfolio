import React from "react";
import { StyledUl, StyledLi, StyledNavLink } from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink to="/">Home</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to="/about">About</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
};

export default Navbar;
