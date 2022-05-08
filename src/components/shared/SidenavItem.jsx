import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { SidenavDivider, SidenavList } from "../../styles/shared/sidenav";
import CustomListItem from "./CustomListItem";

function SidenavItem({ title, subitems }) {
  return (
    <>
      <div style={{ margin: "0 30px" }}>
        <Typography marginTop={3} color="primary">
          {title}
        </Typography>
        <SidenavDivider />
      </div>
      <SidenavList>
        {subitems.map((item, index) => (
          <CustomListItem to={item.location} key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </CustomListItem>
        ))}
      </SidenavList>
    </>
  );
}

export default SidenavItem;
