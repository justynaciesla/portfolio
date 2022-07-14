import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/home";
import Contact from "../views/contact";
import About from "../views/about";
import Projects from "../views/projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={routes.home} element={<Home />} component={Home} />
        <Route
          path={routes.contact}
          element={<Contact />}
          component={Contact}
        />
        <Route
          exact
          path={routes.about}
          element={<About />}
          component={About}
        />
        <Route
          exact
          path={routes.projects}
          element={<Projects />}
          component={Projects}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
