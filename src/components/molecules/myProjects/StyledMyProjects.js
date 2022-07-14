import styled from "styled-components";
import { BookHalf } from "@styled-icons/bootstrap/BookHalf";
import { MoviesAndTv } from "@styled-icons/fluentui-system-filled/MoviesAndTv";
import { Cookie } from "@styled-icons/boxicons-solid/Cookie";
import { ShoppingCart } from "@styled-icons/evaicons-solid/ShoppingCart";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 15.6rem 0rem 15.6rem;
`;

export const StyledSpan = styled.span`
  color: rgb(203, 62, 166);
`;

export const StyledP = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  line-height: 1.5;
`;

export const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const GreyBookLogo = styled(BookHalf)`

  color: grey;
  height: 8.1rem;
  width: 8.1rem;
  padding: 1.25rem;
  }
`;

export const SmallBookLogo = styled(BookHalf)`
  color: rgb(203, 62, 166);
  height: 1.25rem;
  width: 1.25rem;
  margin: 0px 5px 0px 0px;
`;

export const GreyCamera = styled(MoviesAndTv)`
  color: grey;
  height: 8.1rem;
  width: 8.1rem;
  padding: 1.25rem;
`;

export const SmallCamera = styled(MoviesAndTv)`
  color: rgb(203, 62, 166);
  height: 1.25rem;
  width: 1.25rem;
  margin: 0px 5px 0px 0px;
`;

export const GreyCookie = styled(Cookie)`
  color: grey;
  height: 8.1rem;
  width: 8.1rem;
  padding: 1.25rem;
`;

export const SmallCookie = styled(Cookie)`
  color: rgb(203, 62, 166);
  height: 1.25rem;
  width: 1.25rem;
  margin: 0px 5px 0px 0px;
`;

export const GreyShop = styled(ShoppingCart)`
  color: grey;
  height: 8.1rem;
  width: 8.1rem;
  padding: 1.25rem;
`;

export const SmallShop = styled(ShoppingCart)`
  color: rgb(203, 62, 166);
  height: 1.25rem;
  width: 1.25rem;
  margin: 0px 5px 0px 0px;
`;
