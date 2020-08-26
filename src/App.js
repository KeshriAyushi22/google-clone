import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          {/* Home Page (the one with search button) */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* Search Page (the search result page) */}
          <Route exact path="/search">
           <SearchPage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
