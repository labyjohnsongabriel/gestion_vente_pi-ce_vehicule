import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SidebarProvider } from "./Context/SidebarContext"; // Import du provider

ReactDOM.render(
  <SidebarProvider>
    <App />
  </SidebarProvider>,
  document.getElementById("root")
);
