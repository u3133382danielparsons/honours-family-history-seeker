// Node modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// src
import { createPost } from '../actions';
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
import SearchIcon from 'material-ui/svg-icons/action/search';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

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
  body_header: {
    margin: '0px',
    padding: '10px',
    textAlign: 'center'
  },
  iconStyles: {
    marginTop: 10
  },
  linkText: {
    textDecoration: 'none',
    color: 'black'
  }
};

class AddPosts extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;

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
                    leftIcon={<SearchIcon />}
                  >
                    <Link style={styles.linkText} to="/containers/Search">
                      Search
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
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/containers/Dashboard.js"
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
            <div style={{ marginTop: '80px' }}>
              <svg
                fill="#000000"
                height="48"
                viewBox="0 0 24 24"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z" />
              </svg>
              <h1 style={styles.body_header}>ADD POSTS</h1>
              <hr />
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label="Article Heading"
                  name="title"
                  component={this.renderField}
                />
                <Field
                  label="Newspaper Title"
                  name="categories"
                  component={this.renderField}
                />
                <Field
                  label="content"
                  name="content"
                  component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

AddPosts.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired
};

function validate(values) {
  // console.log(values)
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content please';
  }
  return errors;
}

const mapStateToProps = state => {
  const { browser, responsiveDrawer } = state;
  return {
    browser,
    responsiveDrawer
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
    },
    createPost: () => {
      dispatch(createPost());
    }
  };
};

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(mapStateToProps, mapDispatchToProps)(AddPosts));
