import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Chip,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const Header = ({ handleDrawerToggle }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const stateAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirect = (page) => {
    navigate(`/${page}`);
  };

  const logoutSession = async () => {
    dispatch(logOut());
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Toolbar>
      <Box
        style={{ width: "100%" }}
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Tooltip title="Ver Perfil">
            <Chip
              onClick={handleOpenUserMenu}
              color="primary"
              avatar={
                <Avatar alt={stateAuth.name} src={stateAuth.profileImage} />
              }
              label={stateAuth.name ? stateAuth.name : "Iniciar Sesion"}
              variant="outlined"
            />
          </Tooltip>

          {stateAuth.name ? (
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              onClick={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => logoutSession()}>
                <ListItemIcon>
                  <AppRegistrationIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Cerrar Sesion</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleRedirect("profile")}>
                <ListItemIcon>
                  <AppRegistrationIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Mi Pefil</Typography>
              </MenuItem>
            </Menu>
          ) : (
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClick={handleCloseUserMenu}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => handleRedirect("login")}>
                <ListItemIcon>
                  <LoginIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Iniciar Sesion</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleRedirect("register")}>
                <ListItemIcon>
                  <AppRegistrationIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Registrarme</Typography>
              </MenuItem>
            </Menu>
          )}
        </Box>
      </Box>
    </Toolbar>
  );
};
export default Header;
