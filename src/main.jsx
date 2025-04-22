// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import { CustomThemeProvider } from "./Context/themContext";
import { SidebarProvider } from "./Context/SidebarContext";
import App from "./App"; // Import App directly

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the application in BrowserRouter */}
      <CustomThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
