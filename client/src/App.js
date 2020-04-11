import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./pages/Form";
import "./App.css";

const App = () => (
  <Router>
    <div className="container">
        <div className="image"><img alt="cat" src="https://i.imgur.com/cRMYPfR.gif" /></div>
        <h1>Submit Comment</h1>
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>
    </div>
  </Router>
);

export default App;