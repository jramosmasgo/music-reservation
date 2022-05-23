import { styled } from "@mui/material/styles";
import { Calendar } from "react-big-calendar";

export const CustomCalendar = styled(Calendar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.primary.light,
  height: 500,

  button: {
    color: theme.palette.primary.main,
  },

  "button.rbc-active": {
    background: theme.palette.primary.main,
    color: "#000",
  },

  ".rbc-header .rbc-button-link": {
    background: theme.palette.primary.main,
    color: "#000",
  },

  ".rbc-header": {
    background: theme.palette.primary.main,
    color: "#000",
  },

  ".rbc-off-range-bg": {
    background: theme.palette.background.paper,
  },

  ".rbc-today": {
    background: theme.palette.primary.dark,
  },
}));
