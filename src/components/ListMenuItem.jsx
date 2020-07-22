import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: "black",
    },
}));

export default function ListMenuItem() {
    const classes = useStyles();

    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <DashboardRoundedIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/admin" className={classes.link}>
                    <ListItemText primary="Dashboard" />
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <SupervisedUserCircleIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/admins" className={classes.link}>
                    <ListItemText primary="Admin" />
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <GroupRoundedIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/users" className={classes.link}>
                    <ListItemText primary="Users" />
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <HomeWorkRoundedIcon color="primary" />
                </ListItemIcon>
                <Link to="/dashboard/houses" className={classes.link}>
                    <ListItemText primary="House" />
                </Link>
            </ListItem>
        </div>
    );
}
