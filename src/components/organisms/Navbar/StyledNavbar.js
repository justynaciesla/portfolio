import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  position: absolute;
  right: -3%;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  font-size: 1.6rem;
  font-weight: 300;
  z-index: 200;
`;

export const StyledLi = styled.li`
  font-size: 0.9rem;
  padding: 33px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  margin: ${({ margin }) => margin};
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    color: rgb(203, 62, 166);
  }

  &.active {
    color: rgb(203, 62, 166);
    font-size: 16px;
  }
`;
