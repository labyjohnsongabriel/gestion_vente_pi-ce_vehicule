import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  People as PeopleIcon,
  ExpandLess,
  ExpandMore,
  BarChart as BarChartIcon,
  ListAlt as ListAltIcon,
  Edit as EditIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../index.css";
import { useSidebar } from "../Context/SidebarContext.jsx";
import Profile from "../components/Profile/Profile";
import ProfileEdit from "../components/Profile/ProfileEdit";

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Box
      className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}
      sx={{
        width: isSidebarOpen ? 250 : 80,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e293b",
        color: "#f8fafc",
        borderRight: "1px solid #334155",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <List>
        {/* Dashboard */}
        <ListItemButton onClick={() => toggleMenu("dashboard")}>
          <ListItemIcon>
            <DashboardIcon style={{ color: "#f8fafc" }} />
          </ListItemIcon>
          {isSidebarOpen && <ListItemText primary="Dashboard" />}
          {activeMenu === "dashboard" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "dashboard"} timeout="auto" unmountOnExit>
          <Box
            className="menu-content"
            sx={{ paddingLeft: isSidebarOpen ? "1rem" : "0.5rem" }}
          >
            <Link to="/statistiques" className="sidebar-link">
              {isSidebarOpen && (
                <Typography variant="h6">
                  <BarChartIcon /> Statistiques
                </Typography>
              )}
            </Link>
            <Link to="/rapports" className="sidebar-link">
              {isSidebarOpen && (
                <Typography variant="h6">
                  <ListAltIcon /> Rapports détaillés
                </Typography>
              )}
            </Link>
          </Box>
        </Collapse>

        {/* Utilisateurs */}
        <ListItemButton onClick={() => toggleMenu("users")}>
          <ListItemIcon>
            <PeopleIcon style={{ color: "#f8fafc" }} />
          </ListItemIcon>
          {isSidebarOpen && <ListItemText primary="Utilisateurs" />}
          {activeMenu === "users" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "users"} timeout="auto" unmountOnExit>
          <Box
            className="menu-content"
            sx={{ paddingLeft: isSidebarOpen ? "1rem" : "0.5rem" }}
          >
            <Link to="/calendrier" className="sidebar-link">
              {isSidebarOpen && (
                <Typography variant="h6">
                  <ListAltIcon /> Calendrier
                </Typography>
              )}
            </Link>
            <Link to="/securite" className="sidebar-link">
              {isSidebarOpen && (
                <Typography variant="h6">
                  <SecurityIcon /> Sécurité
                </Typography>
              )}
            </Link>
          </Box>
        </Collapse>

        {/* Profil */}
        <ListItemButton onClick={() => toggleMenu("profile")}>
          <ListItemIcon>
            <AccountCircleIcon style={{ color: "#f8fafc" }} />
          </ListItemIcon>
          {isSidebarOpen && <ListItemText primary="Profil" />}
          {activeMenu === "profile" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "profile"} timeout="auto" unmountOnExit>
          <Box
            className="menu-content"
            sx={{ paddingLeft: isSidebarOpen ? "1rem" : "0.5rem" }}
          >
            <Link to="/profile" className="sidebar-link">
              {isSidebarOpen && (
                <Typography variant="h6">
                  <AccountCircleIcon /> Voir le profil
                </Typography>
              )}
            </Link>
            <Link to="/profile/edit" className="sidebar-link">
              {isSidebarOpen && (
                <Typography variant="h6">
                  <EditIcon /> Modifier le profil
                </Typography>
              )}
            </Link>
          </Box>
        </Collapse>

        {/* Paramètres */}
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon style={{ color: "#f8fafc" }} />
          </ListItemIcon>
          {isSidebarOpen && <ListItemText primary="Paramètres" />}
        </ListItemButton>

        {/* Déconnexion */}
        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon style={{ color: "#f8fafc" }} />
          </ListItemIcon>
          {isSidebarOpen && <ListItemText primary="Déconnexion" />}
        </ListItemButton>
      </List>
    </Box>
  );
}
