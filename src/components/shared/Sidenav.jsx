import * as React from "react";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import { itemsMenu } from "../../adapters/menuItems";
import SidenavItem from "./SidenavItem";

export function Sidenav() {
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
        {itemsMenu.map((item) => (
          <SidenavItem
            title={item.title}
            subitems={item.items}
            key={item.idParent}
          />
        ))}
      </List>
    </div>
  );
}
