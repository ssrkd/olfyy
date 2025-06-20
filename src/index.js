import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/olfy">
  <App />
</BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
