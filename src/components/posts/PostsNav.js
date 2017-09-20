import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SearchIcon from 'material-ui/svg-icons/action/search';
import FamiliesIcon from 'material-ui/svg-icons/social/people';
import PeopleIcon from 'material-ui/svg-icons/social/person';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';

const styles = {
  linkText: {
    textDecoration: 'none',
    color: '#4f4f4f'
  }
};
class PostsNav extends Component {
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
        <ListItem onTouchTap={this.handleClose} leftIcon={<SearchIcon />}>
          <Link style={styles.linkText} to="/containers/Search">
            Search
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

export default PostsNav;