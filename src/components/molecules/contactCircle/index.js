import React from "react";
import Header from "../../atoms/headers";
import {
  StyledCircle,
  StyledTextWrapper,
  StyledWrapper,
  StyledSpan,
} from "./StyledContactCircle";

const ContactCircle = () => {
  return (
    <>
      <StyledCircle>
        <StyledWrapper>
          <Header headerType="h2" color="white" margin="0rem">
            Contact
          </Header>
          <StyledTextWrapper>
            <Header
              headerType="h2"
              color="white"
              margin="0rem"
              width="18.75rem"
            >
              me{" "}
              <StyledSpan style={{ color: "rgb(203, 62, 166)" }}>
                now!
              </StyledSpan>
            </Header>
          </StyledTextWrapper>
        </StyledWrapper>
      </StyledCircle>
    </>
  );
};

export default ContactCircle;
