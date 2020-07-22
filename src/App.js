import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainMenu } from "./components";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <h1>Hello</h1>
                </Route>
                <Route path="/dashboard">
                    <MainMenu />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
