import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Slidebar/Slidebar";
import Card from "../../Cards/cards";
import "/src/index.css";
import { useCustomTheme } from "../../Context/themContext";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";  
import { Typography } from "@mui/material";
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="main-content">
          <Card />
        </main>
      </div>
    </div>
  );
}
