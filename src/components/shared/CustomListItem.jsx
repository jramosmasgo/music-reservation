import { ListItemButton } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function CustomListItem({ to, children }) {
  const location = useLocation();

  return (
    <ListItemButton
      style={{ paddingLeft: "40px" }}
      alignItems="center"
      component={Link}
      to={to}
      focusVisibleClassName="active"
      selected={to === location.pathname}
    >
      {children}
    </ListItemButton>
  );
}

export default CustomListItem;
