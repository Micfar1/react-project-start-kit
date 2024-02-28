import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { ThemeWrapper } from "./theme/theme";
import { getNames } from "./apis/NamesAPI";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </Provider>
    </React.StrictMode>
  );
}
