import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import { darkMode, lightMode } from "./theme";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <RecoilRoot>
    <ThemeProvider theme = {false? darkMode : lightMode}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </RecoilRoot>
);
