import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Box, Menu, MenuItem, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/shared/header";
import Login from "../Login";
import useShowModal from "../../hooks/useShowModal";
import { useState } from "react";
import Register from "../Register";
import logout from "../../firebase/auth/logOut";

const Header = ({ handleDrawerToggle }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseModalLogin = () => {
    console.log("cerrando");
    SetOpenLogin(false);
  };

  const logoutSession = async () => {
    await logout();
  };

  const handleCloseModalRegister = () => SetOpenRegister(false);

  const [ModalLogin, SetOpenLogin] = useShowModal({
    Component: <Login />,
    handleClose: handleCloseModalLogin,
  });

  const [ModalRegister, SetOpenRegister] = useShowModal({
    Component: <Register closeregister={handleCloseModalRegister} />,
    handleClose: handleCloseModalRegister,
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Toolbar>
      <ModalLogin />
      <ModalRegister />
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Tooltip title="Ver Perfil">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
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
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={() => SetOpenLogin(true)}>
              <Typography textAlign="center">Login</Typography>
            </MenuItem>
            <MenuItem onClick={() => SetOpenRegister(true)}>
              <Typography textAlign="center">Register</Typography>
            </MenuItem>
            <MenuItem onClick={() => logoutSession()}>
              <Typography textAlign="center">cerrar session</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Toolbar>
  );
};
export default Header;
