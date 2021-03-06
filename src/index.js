import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// for react v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
