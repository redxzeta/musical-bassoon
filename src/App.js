import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Todo from "./components/redxzeta/Todo";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/redxzeta" component={Todo} />
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}
