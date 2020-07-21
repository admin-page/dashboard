import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import { Link } from "react-router-dom";

export default function ListMenuItem() {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <DashboardRoundedIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/admin">
                    <ListItemText primary="Dashboard" />
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <SupervisedUserCircleIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/admins">
                    <ListItemText primary="Admin" />
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <GroupRoundedIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/users">
                    <ListItemText primary="Users" />
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <HomeWorkRoundedIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/houses">
                    <ListItemText primary="House" />
                </Link>
            </ListItem>
        </div>
    );
}