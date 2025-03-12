import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { StoreProvider } from "./store/Store";
import { Router } from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </React.StrictMode>
);
