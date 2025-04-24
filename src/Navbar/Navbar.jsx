import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo (1).webp";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import {
  PersonAdd,
  Logout,
  Menu as MenuIcon,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { IoIosCart } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoShieldHalfOutline } from "react-icons/io5";
import "../App.css";
import Recherche from "../components/Recherche/recherche";
import { useCustomTheme } from "../Context/ThemeContext.jsx";
import { useSidebar } from "../Context/SidebarContext.jsx";
import "../../src/index.css"; // Updated path for styles

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNotification, setAnchorElNotification] = useState(null);
  const { toggleSidebar } = useSidebar();

  const { toggleTheme, mode } = useCustomTheme();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElNotification(null);
  };

  const open = Boolean(anchorEl);
  const openNotification = Boolean(anchorElNotification);

  return (
    <header className="navbar navbar-expand-lg bg-light px-3" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="50" height="50" className="me-2" />
          <span className="fw-bold">HOSTASH</span>
        </Link>

        <IconButton onClick={toggleSidebar} className="menu-toggle">
          <MenuIcon />
        </IconButton>

        <div className="col-xs-3 d-flex align-items-center">
          <Recherche />
        </div>

        <div className="d-flex align-items-center">
     { /*    <Tooltip title="Changer le thème">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconButton
                onClick={toggleTheme}
                sx={{
                  backgroundColor: mode === "dark" ? "#333" : "#eee",
                  color: mode === "dark" ? "#fff" : "#000",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  marginRight: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </motion.div>
          </Tooltip>*/}


          <Tooltip title="Notifications">
  <IconButton
    onClick={handleNotificationClick}
    sx={{
      color: "black",
      height: "50px",
    }}
  >
    <Badge badgeContent={4} color="error">
      <FaRegBell style={{ fontSize: "24px" }} />
    </Badge>
  </IconButton>
</Tooltip>

          <Button className="rounded-circle mr-3" type="button" style={{ color: "black", height: "50px" }}>
            <IoIosCart style={{ fontSize: "24px" }} />
          </Button>

          <Button className="rounded-circle mr-3" type="button" style={{ color: "black", height: "50px" }}>
            <MdOutlineMailOutline style={{ fontSize: "24px" }} />
          </Button>

     
        </div>

        <div className="myAcc d-flex align-items-center">
          <div className="UserImg rounded-circle">
            <span className="rounded-circle" onClick={handleMenuClick}>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="user"
                width="50"
                height="50"
              />
            </span>
          </div>

          <div className="UserInfo">
            <h4 className="fw-bold">User Name</h4>
            <p>johnson@gmail.com</p>
          </div>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Mon Compte
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IoShieldHalfOutline fontSize="small" />
              </ListItemIcon>
              Réinitialiser le mot de passe
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Déconnexion
            </MenuItem>
          </Menu>

          <Menu
            anchorEl={anchorElNotification}
            id="notification-item"
            open={openNotification}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className="head pl-3 pb-2">
              <h4>Notifications</h4>
              <Divider className=" f mb-3" />
            </div>
            <MenuItem onClick={handleClose} className="notification-item">
              <div className="d-flex align-items-center notification-content">
                <span className="rounded-circle">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="user"
                    width="50"
                    height="50"
                  />
                </span>

                <div className="UserInfo">
                  <h4 className="fw-bold">
                    <span className="fw-bold2">
                      <b>Johnson</b> a ajouté <b>“Ceinture Steve Madden”</b> à ses favoris
                    </span>
                  </h4>
                  <p className="test-sky mb-0">il y a 2 minutes</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <Button className="btn-primary" variant="contained">
                  Voir toutes les notifications
                </Button>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}
