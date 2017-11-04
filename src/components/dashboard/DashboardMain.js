import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './css/styles.css';

import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import FamiliesIcon from 'material-ui/svg-icons/social/people';
import FamilyMembersIcon from 'material-ui/svg-icons/social/people-outline';
import PeopleIcon from 'material-ui/svg-icons/social/person';
import DataVizIcon from 'material-ui/svg-icons/editor/insert-chart';
import VideosIcon from 'material-ui/svg-icons/notification/ondemand-video';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';
import ListIcon from 'material-ui/svg-icons/action/list';
import ProfileIcon from 'material-ui/svg-icons/action/perm-identity';
import GalleryIcon from 'material-ui/svg-icons/image/photo-library';
import PostsIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import UrlLinkIcon from 'material-ui/svg-icons/content/link';

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
          <div className="col-sm-6 col-lg-4">
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

          <div className="col-sm-6 col-lg-4">
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

          <div className="col-sm-6 col-lg-4">
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

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/FamilyMembers">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="FAMILY MEMBERS PAGE"
              >
                <FamilyMembersIcon />
                <Subheader>FAMILY MEMBERS</Subheader>
              </IconButton>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/People">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="PEOPLES PAGE"
              >
                <PeopleIcon />
                <Subheader>PEOPLE</Subheader>
              </IconButton>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/Data">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="DATA VIZ PAGE"
              >
                <DataVizIcon />
                <Subheader>DATA VIZ</Subheader>
              </IconButton>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/Videos">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="VIDEOS PAGE"
              >
                <VideosIcon />
                <Subheader>VIDEOS</Subheader>
              </IconButton>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/ArticlesList">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="ARTICLES LIST PAGE"
              >
                <ListIcon />
                <Subheader>ARTICLES LIST</Subheader>
              </IconButton>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
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

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/Profile">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="PROFILE PAGE"
              >
                <ProfileIcon />
                <Subheader>PROFILE</Subheader>
              </IconButton>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/Gallery">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="VIEW THE GALLERY"
              >
                <GalleryIcon />
                <Subheader>GALLERY</Subheader>
              </IconButton>
            </Link>
          </div>

          <div className="col-sm-6 col-lg-4">
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

          <div className="col-sm-6 col-lg-4">
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

          <div className="col-sm-6 col-lg-4">
            <Link to="/containers/AddPosts">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip="ADD POSTS"
              >
                <UrlLinkIcon />
                <Subheader>ARTILCE_LINKS</Subheader>
              </IconButton>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardMain;
