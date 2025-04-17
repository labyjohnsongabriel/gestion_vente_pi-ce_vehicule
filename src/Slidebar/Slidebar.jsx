import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  ExpandLess,
  ExpandMore,
  BarChart as BarChartIcon,
  ListAlt as ListAltIcon,
  Edit as EditIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";
import "../index.css"; // Importation du CSS
import { useCustomTheme } from "../Context/themContext";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${open ? "" : "collapsed"}`}>

      <IconButton onClick={() => setOpen(!open)} className="menu-toggle">
        <MenuIcon />
      </IconButton>

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
            <Typography variant="h6">
              <BarChartIcon /> Statistiques
            </Typography>
            <Typography variant="h6">
              <ListAltIcon /> Rapports détaillés
            </Typography>
          </Box>
        </Collapse>

        <ListItemButton onClick={() => toggleMenu("users")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Utilisateurs" />
          {activeMenu === "users" ? <ExpandLess /> : <ExpandMore />}
          
        </ListItemButton>
        <Collapse in={activeMenu === "users"} timeout="auto" unmountOnExit>
          
          <Box className="menu-content">
            <Typography variant="h6">
              <ListAltIcon />
            </Typography>
            <Typography variant="h6">
              <SecurityIcon /> 
            </Typography>
          </Box>
        </Collapse>

        <ListItemButton onClick={() => toggleMenu("profile")}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profil" />
          {activeMenu === "profile" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={activeMenu === "profile"} timeout="auto" unmountOnExit>
          <Box className="menu-content">
            <Typography variant="h6">
              <AccountCircleIcon /> Voir le profil
            </Typography>
            <Typography variant="h6">
              <EditIcon /> Modifier le profil
            </Typography>
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
    </div>
  );
}
