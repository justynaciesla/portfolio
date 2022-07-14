import styled from "styled-components";

export const StyledCircle = styled.div`
  background-image: linear-gradient(
    180deg,
    rgb(203, 62, 166),
    rgb(63, 108, 180)
  );
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledWrapper = styled.div`
  margin-left: 57%;
`;

export const StyledSpan = styled.span`
  color: rgb(203, 62, 166);
`;
