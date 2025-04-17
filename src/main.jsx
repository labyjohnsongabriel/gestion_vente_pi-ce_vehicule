import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "../router";
import { RouterProvider } from "react-router-dom";
import { CustomThemeProvider } from "./Context/themContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </StrictMode>
);
