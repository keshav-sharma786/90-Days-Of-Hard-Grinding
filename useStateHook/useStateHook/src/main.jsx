import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const render = () => {
  createRoot(document.getElementById("root")).render(<App />);
};

render();
