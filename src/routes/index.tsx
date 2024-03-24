import React from "react";
import Login from "../pages/login";
import Home from "../pages/home";
import { useRoutes } from "react-router-dom";

const RoutesConfig = (props) => {
  const routers = [
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
  ];

  const elements = useRoutes(routers);
  return elements;
};

export default RoutesConfig
