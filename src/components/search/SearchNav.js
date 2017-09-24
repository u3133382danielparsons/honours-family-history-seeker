import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';

// Sidebar Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import PostsIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import FamiliesIcon from 'material-ui/svg-icons/social/people';
import PeopleIcon from 'material-ui/svg-icons/social/person';
import DataVizIcon from 'material-ui/svg-icons/editor/insert-chart';
import VideosIcon from 'material-ui/svg-icons/notification/ondemand-video';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';

const styles = {
  linkText: {
    textDecoration: 'none',
    color: '#4f4f4f'
  }
};
class SearchNav extends Component {
  render() {
    return (
      <List>
        <ListItem
          onTouchTap={this.handleClose}
          leftIcon={<HomeIcon style={styles.iconStyles} />}
        >
          <Link style={styles.linkText} to="/">
            Home
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<DashboardIcon />}>
          <Link style={styles.linkText} to="/containers/Dashboard">
            Dashboard
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<PostsIcon />}>
          <Link style={styles.linkText} to="/containers/Posts">
            Posts
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<FamiliesIcon />}>
          <Link style={styles.linkText} to="/containers/Families">
            Families
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<PeopleIcon />}>
          <Link style={styles.linkText} to="/containers/People">
            People
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<DataVizIcon />}>
          <Link style={styles.linkText} to="/containers/Data">
            Data Viz
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<VideosIcon />}>
          <Link style={styles.linkText} to="/containers/Videos">
            Videos
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<AddPostsIcon />}>
          <Link style={styles.linkText} to="/containers/AddPosts">
            Add Posts
          </Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<AboutIcon />}>
          <Link style={styles.linkText} to="/containers/About">
            About
          </Link>
        </ListItem>
      </List>
    );
  }
}

export default SearchNav;
