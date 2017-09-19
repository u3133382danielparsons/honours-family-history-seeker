import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';

import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import PostsIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import FamiliesIcon from 'material-ui/svg-icons/social/people';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  large: {
    width: 180,
    height: 180,
    padding: 40
  },
  largeIcon: {
    width: 90,
    height: 90,
    color: '#1fd390'
  }
};

class DashboardMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row hovered">
          <div className="col-sm-6">
            <Link to="/">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="HOME PAGE"
              >
                <HomeIcon />
                <Subheader>HOME</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/containers/Search">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="SEARCH TROVE"
              >
                <SearchIcon />
                <Subheader>SEARCH</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/containers/Posts">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="READ POSTS"
              >
                <PostsIcon />
                <Subheader>POSTS</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/containers/Families">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="FAMILIES"
              >
                <FamiliesIcon />
                <Subheader>FAMILIES</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/containers/AddPosts">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="ADD POSTS"
              >
                <AddPostsIcon />
                <Subheader>ADD_POSTS</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/containers/About">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="ABOUT FAMILY HISTORY SEEKER"
              >
                <AboutIcon />
                <Subheader>ABOUT</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="HOME PAGE"
              >
                <HomeIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardMain;
