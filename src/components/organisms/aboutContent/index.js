import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../../atoms/logo";
import GithubAndLinkedin from "../../molecules/githubAndLinkedin";
import Navbar from "../Navbar";

import { StyledColorContainer, StyledWrapper } from "./StyledAboutContent";
import AboutMe from "../../molecules/aboutMe";
import Skills from "../../molecules/skills";

const AboutContent = () => {
  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" },
  });
  const StyledContainer = useRef();

  useEffect(() => {
    tl.fromTo(
      StyledContainer.current,
      { scale: 1.4, borderRadius: "0rem" },
      {
        scale: 1,
        borderRadius: "2rem",
        delay: 0.35,
        duration: 2.5,
        ease: "elastic.out(1.5,1)",
      }
    );
  }, []);

  return (
    <>
      <StyledColorContainer ref={StyledContainer}>
        <Logo />
        <StyledWrapper>
          <AboutMe />
          <Skills />
        </StyledWrapper>
        <GithubAndLinkedin />
        <Navbar />
      </StyledColorContainer>
    </>
  );
};

export default AboutContent;
