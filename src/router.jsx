import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // Main layout
import Home from "./components/Home/Home";
import Dashboard from "./Page/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Registre from "./Navbar/Registre";
import Login from "./Navbar/Login";
import Overview from "./components/Overview/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registre />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "*",
        element: <div>Page Not Found</div>, // Fallback route
      },
    ],
  },
]);

export default router;
