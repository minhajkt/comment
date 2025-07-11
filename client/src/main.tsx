import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import { CommentProvider } from "./context/CommentContext.tsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#f4f6f8", 
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CommentProvider>
      <App />
    </CommentProvider>
  </ThemeProvider>
);
