import styled from "styled-components";
import { BookHalf } from "@styled-icons/bootstrap/BookHalf";

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
  transition: all 1s ease;
`;

export const StyledBack = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease;
`;

export const StyledFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease;
  border: 1px solid grey;
  border-radius: 5%;
`;

export const StyledCard = styled.div`
  width: 15rem;
  height: 15rem;
  transition: opacity 1s ease;
  &:hover ${StyledFace} {
    opacity: 0;
  }
  &:hover ${StyledBack} {
    opacity: 1;
    border-radius: 5%;
    border: 2px solid rgb(203, 62, 166);
  }
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.p`
  color: white;
  font-family: "Roboto";
  font-weight: 500;
  text-transform: uppercase;
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 5px 10px;
`;

export const StyledDescription = styled.p`
  color: white;
  font-family: "Roboto";
  font-weight: 400;
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButton = styled.button`
  width: 4.4rem;
  height: 1.9rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: 1px solid grey;
  border-radius: 5%;
  &:hover {
    background-color: rgb(203, 62, 166);
    border: 1px solid rgb(203, 62, 166);
    border-radius: 5%;
    cursor: pointer;
  }
`;
