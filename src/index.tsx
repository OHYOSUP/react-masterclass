import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import App from "./App";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <QueryClientProvider client = {queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
