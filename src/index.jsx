import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

