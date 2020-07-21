import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardRoundedIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SupervisedUserCircleIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupRoundedIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HomeWorkRoundedIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="House" />
    </ListItem>
  </div>
);
