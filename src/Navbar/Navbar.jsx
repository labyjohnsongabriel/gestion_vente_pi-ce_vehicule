import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo (1).webp";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { CiLight } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import { IoShieldHalfOutline } from "react-icons/io5";
import "../App.css";
import Recherche from "../components/Recherche/recherche";
import { LightMode, DarkMode } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useCustomTheme } from "../Context/themContext";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNotification, setAnchorElNotification] = React.useState(null);


  const open = Boolean(anchorEl);
  const openNotification = Boolean(anchorElNotification);

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

  const { toggleTheme, mode } = useCustomTheme();

  return (
    <header className="navbar navbar-expand-lg bg-light px-3" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="50" height="50" className="me-2" />
          <span className="fw-bold">HOSTASH</span>
        </Link>

        <div className="col-xs-3 d-flex align-items-center">
          <Recherche />
        </div>

        <div className="d-flex align-items-center">
          <Tooltip title="Changer le thème">
            <IconButton
              onClick={toggleTheme}
              sx={{
                backgroundColor: mode === "dark" ? "#333" : "#eee",
                color: mode === "dark" ? "#fff" : "#000",
                borderRadius: "50%",
                width: 30,
                height: 30,
                marginRight: "10px",
      
              }}
            >
              {mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
          <Button
            className="rounded-circle mr-3"
            type="button"
            style={{ color: "black", height: "50px" }}
          >
            <IoIosCart style={{ fontSize: "24px" }} />
          </Button>



          <Button
            className="rounded-circle mr-3"
            onClick={handleNotificationClick}
            type="button"
            style={{ color: "black", height: "50px" }}
          >
            <FaRegBell style={{ fontSize: "24px" }} />
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

          {/* Menu Utilisateur */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
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
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
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
                      <b>Johnson</b> added to his favorite list{" "}
                      <b>Leader belt steve madden</b>
                    </span>
                  </h4>
                  <p className="test-sky mb-0">2 minutes ago</p>
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
