import React from "react";
import { Switch, Route } from "react-router-dom";

import {
    Admin,
    Admins,
    Houses,
    Users,
    CreateAdmin,
    EditAdmin,
    UsersApproval,
    UsersEdit,
} from "../pages";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/dashboard/admin">
                <Admin />
            </Route>
            <Route exact path="/dashboard/admins">
                <Admins />
            </Route>
            <Route exact path="/dashboard/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/dashboard/admins/edit/:id">
                <EditAdmin />
            </Route>
            <Route exact path="/dashboard/houses">
                <Houses />
            </Route>
            <Route exact path="/dashboard/users">
                <Users />
            </Route>
            <Route exact path="/dashboard/users/edit/:id">
                <UsersEdit />
            </Route>
            <Route exact path="/dashboard/users/approval">
                <UsersApproval />
            </Route>
            <Route exact path="/dashboard/houses">
                <Houses />
            </Route>
        </Switch>
    );
}
