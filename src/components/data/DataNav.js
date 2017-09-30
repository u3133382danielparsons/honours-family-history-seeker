import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SearchIcon from 'material-ui/svg-icons/action/search';
import PostsIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import FamiliesIcon from 'material-ui/svg-icons/social/people';
import PeopleIcon from 'material-ui/svg-icons/social/person';
import VideosIcon from 'material-ui/svg-icons/notification/ondemand-video';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import ListIcon from 'material-ui/svg-icons/action/list';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';

class DataNav extends Component {
  render() {
    return (
      <List className="nav-link">
        <ListItem onTouchTap={this.handleClose} leftIcon={<HomeIcon />}>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<DashboardIcon />}>
          <Link to="/containers/Dashboard">Dashboard</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<SearchIcon />}>
          <Link to="/containers/Search">Search</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<PostsIcon />}>
          <Link to="/containers/Posts">Posts</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<FamiliesIcon />}>
          <Link to="/containers/Families">Families</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<PeopleIcon />}>
          <Link to="/containers/People">People</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<VideosIcon />}>
          <Link to="/containers/Videos">Videos</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<AddPostsIcon />}>
          <Link to="/containers/AddPosts">Add Posts</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<ListIcon />}>
          <a href="https://url-list.herokuapp.com">Url List</a>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<AboutIcon />}>
          <Link to="/containers/About">About</Link>
        </ListItem>
      </List>
    );
  }
}

export default DataNav;
