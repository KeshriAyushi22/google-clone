import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage"
import { useContextValue } from "./services/context";
import { auth } from "./firebase";

function App() {

  const [{ }, dispatch] = useContextValue()

  /**Check if user was logged in or not, if yes log them again */
  useEffect(() => {
    console.log("here")
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser)
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      else {
        dispatch({
          type: 'SET_USER',
          user: ''
        })  
      }
    })

  }, [])



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
