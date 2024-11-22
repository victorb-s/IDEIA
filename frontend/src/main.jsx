import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider
      theme={localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme }
    >
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </>
);
