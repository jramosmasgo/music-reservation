import { createTheme } from "@mui/material/styles";

const themePrimary = createTheme({
  palette: {
    primary: {
      main: "#00B9AE",
    },
    text: {
      primary: "#F9F9F9",
      secondary: "00B9AE",
      disabled: "#858484",
    },
    background: {
      default: "#16181E",
      paper: "#21242d",
    },
    action: {
      disabled: "#858484",
    },
  },
});

themePrimary.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [themePrimary.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};

themePrimary.typography.h2 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [themePrimary.breakpoints.up("md")]: {
    fontSize: "3.4rem",
  },
};

export default themePrimary;
