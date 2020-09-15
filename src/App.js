import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Organization from "./pages/Products";
import Header from "./ui-components/Header";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Header />
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Organization />
      </Route>
    </Router>
  );
}

export default App;
