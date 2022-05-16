import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store/store";
import { AppRouter } from "./routers/AppRouter";
import themePrimary from "./styles/themes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themePrimary}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
