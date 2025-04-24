import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./Context/SidebarContext";
import { ThemeProvider } from "./Context/ThemeContext"; 
import { UserProvider } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <ThemeProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ThemeProvider>
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
