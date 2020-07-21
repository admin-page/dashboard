import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import Admin from "./pages/Admin/Admin"
import Users from "./pages/Users/Users"
import Houses from "./pages/Houses/Houses"


function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/dashboard/admin">
              <Admin />
            </Route>
            <Route exact path="/dashboard/users">
              <Users />
            </Route>
            <Route exact path="/dashboard/houses">
              <Houses />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
