import React from "react";
import Login from "../pages/auth/Login";
import Home from "../pages/home";
import { useRoutes } from "react-router-dom";
import { Chatbot } from "../pages/chat-bot";
import SignUp from "../pages/auth/SignUp";

export const PATH_NAME = {
  LOGIN: "/", 
  SIGN_UP: "/sign-up", 
  HOME: "/home",
  CHAT_BOT: "/chatbot",
};

const RoutesConfig = (props) => {
  const routers = [
    { path: PATH_NAME.LOGIN, element: <Login /> },
    { path: PATH_NAME.SIGN_UP, element: <SignUp /> },
    { path: PATH_NAME.HOME, element: <Home /> },
    { path: PATH_NAME.CHAT_BOT, element: <Chatbot /> },
  ];

  const elements = useRoutes(routers);
  return elements;
};

export default RoutesConfig;
