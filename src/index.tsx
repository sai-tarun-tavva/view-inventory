import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root for rendering the React application
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the application wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
