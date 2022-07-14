import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { StyledColorContainer, StyledWrapper } from "./StyledHomeContent";
import Navbar from "../../organisms/Navbar";
import GithubAndLinkedin from "../../molecules/githubAndLinkedin";
import Logo from "../../atoms/logo";
import HomeCircle from "../../molecules/homeCircle";
import HomeText from "../../molecules/homeText";

const HomeContent = () => {
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
          <HomeCircle />
          <HomeText />
        </StyledWrapper>
        <GithubAndLinkedin />
        <Navbar />
      </StyledColorContainer>
    </>
  );
};

export default HomeContent;
