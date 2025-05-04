import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from "react-router-dom";
import { theme } from '@/theme';
import { routes } from '@/routes';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}/>
    </ThemeProvider>
  )
}

export default App
