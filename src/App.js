import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./style.css";

export default function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
