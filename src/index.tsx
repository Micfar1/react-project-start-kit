import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeWrapper } from "./theme/theme";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </React.StrictMode>
  );
}
