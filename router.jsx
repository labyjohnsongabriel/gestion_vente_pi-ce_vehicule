import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

// Importation des composants
import Home from "./src/components/Home/Home";
import Dashboard from "./src/components/Dashboard/Dashboard";
import Profile from "./src/components/Profile/Profile";
import Registre from "./src/Navbar/Registre"; // Corrected path
import Login from "./src/Navbar/Login"; // Corrected path
import Navbar from "./src/Navbar/Navbar";
import Sidebar from "./src/Slidebar/Slidebar";

const MainLayout = () => (
  <div>
    <Navbar />
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
        path: "/sidebar",
        element: <Sidebar />,
      },
    ],
  },
]);

export default router;
