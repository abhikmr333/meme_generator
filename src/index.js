import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./components/App.js";
//import fetchMemeData from "./memesData.js";

const rootNode = document.querySelector("#root");
const root = createRoot(rootNode);

root.render(<App />);
