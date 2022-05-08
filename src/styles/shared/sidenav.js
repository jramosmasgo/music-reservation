import { Divider, List } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SidenavDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginBottom: "10px",
}));

export const SidenavList = styled(List)(({ theme }) => ({
  "&& .Mui-selected, && .Mui-selected:hover": {
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "4px",
      right: "0",
      top: "0",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },

  "& .MuiListItemButton-root:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// export const SidenavList = styled(List)({
//   // selected and (selected + hover) states
//   "&& .Mui-selected, && .Mui-selected:hover": {
//     backgroundColor: "red",
//     "&, & .MuiListItemIcon-root": {
//       color: "pink",
//     },
//   },
//   // hover states
//   "& .MuiListItemButton-root:hover": {
//     backgroundColor: "orange",
//     "&, & .MuiListItemIcon-root": {
//       color: "yellow",
//     },
//   },
// });
