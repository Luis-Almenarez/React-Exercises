import React from "react";
import ReactDOM from "react-dom/client";
// import { FirtsApp } from "./FirtsApp";
import "./style.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirtsApp /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
