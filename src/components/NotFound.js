// components/NotFound.js
import React from 'react';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';

const NotFound = () => (
  <div className="container">
    <h3>404 page not found</h3>
    <p>
      Sorry but the page you are looking for does not exist in Family History
      Seeker.
    </p>
    <List className="nav-link">
      <ListItem onTouchTap={this.handleClose} leftIcon={<HomeIcon />}>
        <Link to="/">Back to Home Page</Link>
      </ListItem>
      <ListItem onTouchTap={this.handleClose} leftIcon={<DashboardIcon />}>
        <Link to="/containers/Dashboard">Or Go To The Dashboard</Link>
      </ListItem>
    </List>
  </div>
);

export default NotFound;
