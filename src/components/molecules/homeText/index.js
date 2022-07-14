import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../../atoms/headers";
import {
  StyledTextWrapper,
  StyledFirstTextWrapper,
  StyledSpan,
  StyledPinkSpan,
} from "./StyledHomeText";

const HomeText = () => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
  });
  const CreativeText = useRef();

  useEffect(() => {
    tl.fromTo(
      CreativeText.current,
      { x: 300, opacity: 0.5 },
      { x: 0, opacity: 1 },
      "<70%"
    );
  }, []);

  return (
    <StyledTextWrapper>
      <StyledFirstTextWrapper>
        <Header headerType="h1" margin="0" padding="0">
          <StyledSpan>I am</StyledSpan>
        </Header>
        <Header headerType="h1" overflow="hidden" margin="0" padding="0">
          <StyledPinkSpan ref={CreativeText}>a creative</StyledPinkSpan>
        </Header>
      </StyledFirstTextWrapper>
      <StyledFirstTextWrapper>
        <Header headerType="h1" margin="0" padding="0">
          <StyledSpan>frontend developer</StyledSpan>
        </Header>
      </StyledFirstTextWrapper>
    </StyledTextWrapper>
  );
};

export default HomeText;
