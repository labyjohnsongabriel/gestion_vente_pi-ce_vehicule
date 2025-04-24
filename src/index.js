import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // Import the router configuration
import "./index.css"; // Global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider here */}
  </React.StrictMode>
);
