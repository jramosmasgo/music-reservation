import { AppBar, Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import { Sidenav } from "../components/shared/Sidenav";
import Alert from "../components/ui/Alert";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../redux/actions/auth";

const drawerWidth = 290;

function Layout({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const stateAlert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      dispatch(
        login(
          currentUser.uid,
          currentUser.displayName,
          currentUser.email,
          currentUser.photoURL,
          localStorage.getItem("token")
        )
      );
    }
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Alert
        type={stateAlert.type}
        open={stateAlert.open}
        message={stateAlert.message}
      />
      <CssBaseline />
      <AppBar
        color="transparent"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Header handleDrawerToggle={handleDrawerToggle} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {<Sidenav />}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {<Sidenav />}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box padding="0 20px">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
