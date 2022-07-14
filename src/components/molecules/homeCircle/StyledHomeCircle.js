import styled from "styled-components";

export const StyledPhotoCircle = styled.div`
  background-image: linear-gradient(
    180deg,
    rgb(203, 62, 166),
    rgb(63, 108, 180)
  );
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 17.5rem;
  height: 18.75rem;
  object-fit: contain;
  position: relative;
  border-radius: 50%;
`;
