import { createRoot } from 'react-dom/client'
import App from "../src/app/page.tsx"
import '../styles/index.css'
import React from 'react';

createRoot(document.querySelector('#root')!).render(
    <App />
)
