import React from "react";
import Photo from "../../../assets/img/meTransparent.png";
import { StyledImg, StyledPhotoCircle } from "./StyledHomeCircle";

const HomeCircle = () => {
  return (
    <>
      <StyledPhotoCircle>
        <StyledImg alt="me" src={Photo}></StyledImg>
      </StyledPhotoCircle>
    </>
  );
};

export default HomeCircle;
