import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./components/App.js";

const rootNode = document.querySelector("#root");
const root = createRoot(rootNode);

root.render(<App />);
