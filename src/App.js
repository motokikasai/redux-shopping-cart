import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/home";
import Product from "./pages/product";
import Error from "./pages/error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-wrapper">
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
