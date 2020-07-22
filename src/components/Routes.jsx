import React from "react";
import { Switch, Route } from "react-router-dom";

import { Admins, Houses, Users, CreateAdmin, EditAdmin } from "../pages";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/dashboard/admins">
                <Admins />
            </Route>
            <Route exact path="/dashboard/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/dashboard/admins/edit">
                <EditAdmin />
            </Route>
            <Route exact path="/dashboard/houses">
                <Houses />
            </Route>
            <Route exact path="/dashboard/users">
                <Users />
            </Route>
            <Route exact path="/dashboard/houses">
                <Houses />
            </Route>
        </Switch>
    );
}
