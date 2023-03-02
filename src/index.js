import React from "react";
import ReactDOM from "react-dom/client";
import ColorProvider from "./color-hooks.js";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
