import React from "react";
import Header from "../../atoms/headers";
import ProjectBox from "../projectsBox";
import {
  StyledWrapper,
  StyledSpan,
  StyledP,
  StyledProjectWrapper,
  GreyBookLogo,
  GreyShop,
  GreyCookie,
  GreyCamera,
  SmallBookLogo,
  SmallCookie,
  SmallCamera,
  SmallShop,
} from "./StyledMyProjects";

const MyProjects = () => {
  return (
    <StyledWrapper>
      <Header headerType="h3" color="white" margin="0">
        My <StyledSpan>projects</StyledSpan>
      </Header>
      <StyledP>
        Here are a few projects I've worked on recently. All of them are made in
        React.js.
      </StyledP>
      <StyledProjectWrapper>
        <ProjectBox
          title="Shop App"
          icon={<GreyShop />}
          smallIcon={<SmallShop />}
          description="Fake React shop. Provides functionalities such as shopping cart, filtering by several categories and searching products."
          githublink="https://github.com/justynaciesla/furnitureShop"
          demo="https://furniture-shop-react.netlify.app/"
        />
        <ProjectBox
          title="Movies App"
          icon={<GreyCamera />}
          smallIcon={<SmallCamera />}
          description="Simple app fetching and presenting movie data for user. Provides functionalities such as searching movies, adding to favourites movies."
          githublink="https://github.com/justynaciesla/movies"
          demo="https://top-movies-app-react.netlify.app/"
        />
        <ProjectBox
          title="Animated Cookie"
          icon={<GreyCookie />}
          smallIcon={<SmallCookie />}
          description="Animated cookie which is made using the GreenSock Animation Platform (GSAP), which is JavaScript library"
          githublink="https://github.com/justynaciesla/animatedCookie"
          demo="https://animated-cookie.netlify.app/"
        />
        <ProjectBox
          title="Recipebook App"
          icon={<GreyBookLogo />}
          smallIcon={<SmallBookLogo />}
          description="Simple app fetching and presenting recipes data for user."
          githublink="https://github.com/justynaciesla/cookbook"
          demo="https://coookboook.netlify.app/"
        />
      </StyledProjectWrapper>
    </StyledWrapper>
  );
};

export default MyProjects;
