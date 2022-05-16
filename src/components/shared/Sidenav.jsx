import * as React from "react";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import { itemsMenu } from "../../adapters/menuItems";
import SidenavItem from "./SidenavItem";
import { useSelector } from "react-redux";

export function Sidenav() {
  const stateAuth = useSelector((state) => state.auth);

  return (
    <div>
      <Box padding={1} marginTop={3} marginBottom={10}>
        <Box
          component="img"
          marginLeft={3}
          sx={{
            height: 72,
          }}
          alt="The house from the offer."
          src="/images/reservation2.png"
        />
      </Box>
      <List>
        {itemsMenu.map((item) =>
          !item.protected ? (
            <SidenavItem
              title={item.title}
              subitems={item.items}
              key={item.idParent}
            />
          ) : stateAuth.name ? (
            <SidenavItem
              title={item.title}
              subitems={item.items}
              key={item.idParent}
            />
          ) : null
        )}
      </List>
    </div>
  );
}
