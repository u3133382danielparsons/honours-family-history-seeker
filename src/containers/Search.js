// Node modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// src
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';
import '../styles/App.css';

// Material-ui
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from '../material-ui-responsive-drawer/index.js';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import PostsIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import FamiliesIcon from 'material-ui/svg-icons/action/group-work';
import AddPostsIcon from 'material-ui/svg-icons/action/note-add';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';
import SvgIcon from 'material-ui/SvgIcon';

// inline styles
const styles = {
  drawer_container: {
    backgroundColor: '#1fd390',
    height: '100%'
  },
  drawer_header_container: {
    padding: '10px'
  },
  iconStyles: {
    marginTop: 10
  },
  linkText: {
    textDecoration: 'none',
    color: '#4f4f4f'
  }
};

class Search extends Component {
  render() {
    return (
      <div>
        <div>
          <ResponsiveDrawer openSecondary={false}>
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header_container}>
                <List>
                  <ListItem
                    onTouchTap={this.handleClose}
                    leftIcon={<HomeIcon style={styles.iconStyles} />}
                  >
                    <Link style={styles.linkText} to="/">
                      Home
                    </Link>
                  </ListItem>
                  <ListItem
                    onTouchTap={this.handleClose}
                    leftIcon={<DashboardIcon />}
                  >
                    <Link style={styles.linkText} to="/containers/Dashboard">
                      Dashboard
                    </Link>
                  </ListItem>
                  <ListItem
                    onTouchTap={this.handleClose}
                    leftIcon={<PostsIcon />}
                  >
                    <Link style={styles.linkText} to="/containers/Posts">
                      Posts
                    </Link>
                  </ListItem>
                  <ListItem
                    onTouchTap={this.handleClose}
                    leftIcon={<FamiliesIcon />}
                  >
                    <Link style={styles.linkText} to="/containers/Families">
                      Families
                    </Link>
                  </ListItem>
                  <ListItem
                    onTouchTap={this.handleClose}
                    leftIcon={<AddPostsIcon />}
                  >
                    <Link style={styles.linkText} to="/containers/AddPosts">
                      Add Posts
                    </Link>
                  </ListItem>
                  <ListItem
                    onTouchTap={this.handleClose}
                    leftIcon={<AboutIcon />}
                  >
                    <Link style={styles.linkText} to="/containers/About">
                      About
                    </Link>
                  </ListItem>
                </List>
              </div>
            </div>
          </ResponsiveDrawer>
          <BodyContainer openSecondary={false}>
            <ResponsiveAppBar
              title={'FAMILY HISTORY SEEKER'}
              iconElementRight={
                <FlatButton
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/containers/Search.js"
                  target="_blank"
                  secondary={true}
                  icon={
                    <SvgIcon width={22} height={22} viewBox="0 0 1800 1800">
                      <path
                        d={
                          'M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
                        }
                      />
                    </SvgIcon>
                  }
                />
              }
            />

            <div className="container">
              <header>
                <svg
                  fill="#1fbcd3"
                  height="48"
                  viewBox="0 0 24 24"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <h3>SEARCH TROVE</h3>
              </header>

              <div className="basic-search">
                <h3>Make a Basic Search</h3>
              </div>
              <SearchBar />

              <ArticleList />
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  // console.log('In a Search.js state', state);

  const { browser, responsiveDrawer, articles } = state;
  return {
    browser,
    responsiveDrawer,
    articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen());
    },
    toggleDrawerDock: () => {
      dispatch(toggleDrawerDock());
    },
    setResponsive: isResponsive => {
      dispatch(setResponsive(isResponsive));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
