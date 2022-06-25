import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

import { DrawerProvider } from "features/navigation";
import { ThemeProvider } from "features/theme";
import App from "./App";
import "./style/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <DrawerProvider>
          <App />
        </DrawerProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
