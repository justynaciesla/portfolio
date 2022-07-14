import styled from "styled-components";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 30px;
`;

export const GreyReactLogo = styled(ReactLogo)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyJavaScript = styled(Javascript)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyHtml = styled(Html5)`
  color: grey;
  height: 3.75rem;
  width: 4.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyCss = styled(Css3)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyBootstrap = styled(Bootstrap)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyMaterialui = styled(Materialui)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyRedux = styled(Redux)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.25rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;

export const GreyStyledComponents = styled(Styledcomponents)`
  color: grey;
  height: 3.75rem;
  width: 3.75rem;
  padding: 0.9rem;
  transition: color 0.5s ease;
  &:hover {
    color: rgb(203, 62, 166);
  }
`;
