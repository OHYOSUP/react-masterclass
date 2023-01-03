import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import App from "./App";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
