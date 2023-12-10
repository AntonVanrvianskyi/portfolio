import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./view/theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {MyContextProvider} from "./context";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
      <MyContextProvider>
          <BrowserRouter>
                <App />
          </BrowserRouter>
      </MyContextProvider>
  </ThemeProvider>,
);
