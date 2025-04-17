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
import { Link } from "react-router-dom"; // Importation de Link pour la navigation
import "../index.css"; // Importation du CSS

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Box
      className="sidebar"
      sx={{
        width: 250,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "background.paper",
        color: "text.primary", 
        borderRight: "1px solid #ccc",
      }}
    >

      <List>
        <ListItemButton onClick={() => toggleMenu("dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {activeMenu === "dashboard" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "dashboard"} timeout="auto" unmountOnExit>
          <Box className="menu-content">
            <Link to="/statistiques">
              <Typography variant="h6">
                <BarChartIcon /> Statistiques
              </Typography>
            </Link>
            <Link to="/rapports">
              <Typography variant="h6">
                <ListAltIcon /> Rapports détaillés
              </Typography>
            </Link>
          </Box>
        </Collapse>

        {/* Utilisateurs */}
        <ListItemButton onClick={() => toggleMenu("users")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Utilisateurs" />
          {activeMenu === "users" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "users"} timeout="auto" unmountOnExit>
          <Box className="menu-content">
            <Link to="/calendrier">
              <Typography variant="h6">
                <ListAltIcon /> Calendrier
              </Typography>
            </Link>
            <Link to="/securite">
              <Typography variant="h6">
                <SecurityIcon /> Sécurité
              </Typography>
            </Link>
          </Box>
        </Collapse>

        {/* Profil */}
        <ListItemButton onClick={() => toggleMenu("profile")}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profil" />
          {activeMenu === "profile" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "profile"} timeout="auto" unmountOnExit>
          <Box className="menu-content">
            <Link to="/profil">
              <Typography variant="h6">
                <AccountCircleIcon /> Voir le profil
              </Typography>
            </Link>
            <Link to="/modifier-profil">
              <Typography variant="h6">
                <EditIcon /> Modifier le profil
              </Typography>
            </Link>
          </Box>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Paramètres" />
        </ListItemButton>


        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Déconnexion" />
        </ListItemButton>
      </List>
    </Box>
  );
}
