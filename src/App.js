import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainMenu } from "./components";
import { Login } from "./pages";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <MainMenu />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
