import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ForgetPwdPage from "../pages/ForgetPwdPage/ForgetPwdPage";
import MainPage from "../component/mainPage"

export default function Router() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/ForgetPwd",
      element: <ForgetPwdPage />,
    },
    {
      path:"/mainPage",
      element: <MainPage />,
    }

  ]);
  return element;
}
