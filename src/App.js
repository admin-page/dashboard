import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainMenu } from "./components";
import { Login } from "./pages";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
