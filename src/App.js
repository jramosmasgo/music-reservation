import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRouter } from "./routers/AppRouter";
import themePrimary from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={themePrimary}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
