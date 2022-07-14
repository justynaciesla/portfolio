import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  background-color: black;
  height: 100vw;
  width: 100vw;
  position: absolute;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledCircle = styled.div`
  background-image: linear-gradient(
    180deg,
    rgb(203, 62, 166),
    rgb(63, 108, 180)
  );
  width: 44rem;
  height: 44rem;
  border-radius: 50%;
  margin-left: -22rem;
  margin-top: 10rem;
`;

export const StyledCircleTwo = styled.div`
  background-image: linear-gradient(180deg, #5d53a4, #3477bb);
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  margin-left: 70%;
    margin-top: -70%;
}
`;
