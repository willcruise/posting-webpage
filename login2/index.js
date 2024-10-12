import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";
import Login from "./login.js";

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Login />);
