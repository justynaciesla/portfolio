import React from "react";
import Link from "../../atoms/link";
import Github from "../../../assets/icons/github.png";
import Linkedin from "../../../assets/icons/linkedin.png";
import { StyledWrapper, StyledImg } from "./styledGithubAndLinkedin";

const GithubAndLinkedin = () => {
  return (
    <StyledWrapper>
      <Link
        linkType="a"
        margin="0rem 1.25rem 0rem 0rem"
        to="https://github.com/justynaciesla"
        target="_blank"
      >
        <StyledImg alt="github" src={Github} />
      </Link>
      <Link
        linkType="a"
        to="https://www.linkedin.com/in/justyna-cie%C5%9Bla-a04099159/"
        target="_blank"
      >
        <StyledImg alt="linkedin" src={Linkedin} />
      </Link>
    </StyledWrapper>
  );
};

export default GithubAndLinkedin;
