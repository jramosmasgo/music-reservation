import { createTheme } from "@mui/material/styles";

const themePrimary = createTheme({
  palette: {
    primary: {
      main: "#00B9AE",
    },
    text: {
      primary: "#F9F9F9",
      secondary: "00B9AE",
    },
    background: {
      default: "#16181E",
      paper: "#21242d",
    },
  },
});

export default themePrimary;
