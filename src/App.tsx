import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { theme } from "@/theme";
import { routes } from "@/routes";
import store from "@/store";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
