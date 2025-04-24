import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App"; // Main layout
import Home from "../components/Home/Home"; // Home page
import Profile from "../components/Profile/Profile"; // Profile page
import Registre from "../Navbar/Registre"; // Corrected path
import Login from "../Navbar/Login"; // Corrected path
import Overview from "../components/Overview/Overview"; // Overview page

const MainLayout = () => (
  <div>
    <App />
    <Outlet /> {/* Renders child routes */}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Home page
      },
      {
        path: "/profile",
        element: <Profile />, // Profile page
      },
      {
        path: "/login",
        element: <Login />, // Login page
      },
      {
        path: "/register",
        element: <Registre />, // Register page
      },
      {
        path: "/overview",
        element: <Overview />, // Overview page
      },
      {
        path: "*",
        element: <div>Page Not Found</div>, // Fallback route
      },
    ],
  },
]);

export default router;
