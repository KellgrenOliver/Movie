import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div id="app">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
