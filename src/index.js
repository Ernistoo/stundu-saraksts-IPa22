import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Iegut elementy no index.html
const elementsNoHTML = document.getElementById("root");

// 2. Parasto elementu parvers par React sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

// 3.
sakne.render(<App />);