import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';

// Sidebar Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SearchIcon from 'material-ui/svg-icons/action/search';
import GalleryIcon from 'material-ui/svg-icons/image/photo-library';
import FamiliesIcon from 'material-ui/svg-icons/social/people';
import FamilyMembersIcon from 'material-ui/svg-icons/social/people-outline';
import PeopleIcon from 'material-ui/svg-icons/social/person';
import DataVizIcon from 'material-ui/svg-icons/editor/insert-chart';
import VideosIcon from 'material-ui/svg-icons/notification/ondemand-video';
import ProfileIcon from 'material-ui/svg-icons/action/perm-identity';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';
import PostsIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import UrlLinkIcon from 'material-ui/svg-icons/content/link';

class ArticlesListNav extends Component {
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
        <ListItem onTouchTap={this.handleClose} leftIcon={<FamiliesIcon />}>
          <Link to="/containers/Families">Families</Link>
        </ListItem>
        <ListItem
          onTouchTap={this.handleClose}
          leftIcon={<FamilyMembersIcon />}
        >
          <Link to="/containers/FamilyMembers">Family Members</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<PeopleIcon />}>
          <Link to="/containers/People">People</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<DataVizIcon />}>
          <Link to="/containers/Data">Data Viz</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<VideosIcon />}>
          <Link to="/containers/Videos">Videos</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<ProfileIcon />}>
          <Link to="/containers/Profile">Profile</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<AboutIcon />}>
          <Link to="/containers/About">About</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<GalleryIcon />}>
          <Link to="/containers/Gallery">Gallery</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<PostsIcon />}>
          <Link to="/containers/Posts">Posts</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<AddPostsIcon />}>
          <Link to="/containers/AddPosts">Add Posts</Link>
        </ListItem>
        <ListItem onTouchTap={this.handleClose} leftIcon={<UrlLinkIcon />}>
          <Link to="/containers/UrlLinks">Article Links</Link>
        </ListItem>
      </List>
    );
  }
}

export default ArticlesListNav;
