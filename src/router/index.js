import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Main layout
import Home from "../components/Home/Home"; // Home page
import Profile from "../components/Profile/Profile"; // Profile page

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Home page
      },
      {
        path: "/profile",
        element: <Profile />, // Profile page
      },
    ],
  },
]);

export default router;
