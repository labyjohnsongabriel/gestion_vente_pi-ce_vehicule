import React, { useState } from "react";
import Sidebar from "../../Slidebar/Slidebar";
import Overview from "../../components/Overview/Overview";
import {
  Box,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  Fab,
  Tooltip,
} from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../../styles/Dashboard.css";
import { useCustomTheme } from "../../Context/ThemeContext"; // Ton hook personnalisé

const drawerWidth = 29;

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleTheme, mode } = useCustomTheme(); // Récupère le mode et la fonction toggle

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "120vh",
        backgroundColor: theme.palette.background.default, // Dynamique
      }}
    >
      {/* Contenu principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(120% - ${drawerWidth}px)` },
          marginLeft: { md: drawerWidth },
          minHeight: "150vh",
          backgroundColor: theme.palette.background.default,
          paddingTop: "70px",
        }}
      >
        {/* Navbar fixe */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            marginLeft: "250px",
          }}
        >
          <Navbar />
        </Box>

        {/* Image banner dynamique */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "300px" },
            backgroundImage: `url(${
              mode === "dark"
                ? "/src/image/banner-dark.jpg"
                : "/src/image/dashboard-banner.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "70px",
          }}
        />

        {/* Contenu du dashboard */}
        <Container
          sx={{
            py: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
          }}
        >
          <Overview />
        </Container>
      </Box>

      {/* Menu latéral mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#111827",
            color: "#fff",
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Bouton flottant pour changer de thème */}
      <Tooltip title="Changer le thème" placement="left">
        <Fab
          size="medium"
          color="primary"
          onClick={toggleTheme}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </Fab>
      </Tooltip>
    </Box>
  );
}
