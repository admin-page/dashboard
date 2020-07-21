import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { MainMenu } from "./components";

function App() {
    return (
        <Router>
            <MainMenu />
        </Router>
    );
}

export default App;
