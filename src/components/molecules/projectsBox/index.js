import React from "react";
import Link from "../../atoms/link";
import {
  StyledCard,
  StyledFace,
  StyledBack,
  StyledContent,
  StyledTitleWrapper,
  StyledTitle,
  StyledDescriptionWrapper,
  StyledDescription,
  StyledButtonsWrapper,
  StyledButton,
} from "./styledProjectBox";

const ProjectBox = ({
  title,
  icon,
  smallIcon,
  description,
  githublink,
  demo,
}) => {
  return (
    <StyledCard>
      <StyledContent>
        <StyledFace>{icon}</StyledFace>
        <StyledBack>
          <StyledTitleWrapper>
            {smallIcon}
            <StyledTitle>{title}</StyledTitle>
          </StyledTitleWrapper>
          <StyledDescriptionWrapper>
            <StyledDescription style={{ color: "white", fontFamily: "Roboto" }}>
              {description}
            </StyledDescription>
          </StyledDescriptionWrapper>
          <StyledButtonsWrapper>
            <Link linkType="a" to={githublink} target="_blank">
              <StyledButton>github</StyledButton>
            </Link>
            <Link linkType="a" to={demo} target="_blank">
              <StyledButton>demo</StyledButton>
            </Link>
          </StyledButtonsWrapper>
        </StyledBack>
      </StyledContent>
    </StyledCard>
  );
};

export default ProjectBox;
