// Node modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Material-ui
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from './material-ui-responsive-drawer/index.js';
import {
  Card,
  CardHeader,
  CardText,
  CardMedia,
  CardTitle,
  CardActions
} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AboutIcon from 'material-ui/svg-icons/action/question-answer';

// Images
import grayFamily from './img/gray/grayFamily.jpg';
import grayAv from './img/gray/grayAv.jpg';
import grayArtP1 from './img/gray/grayArtP1.png';
import grayArtP2 from './img/gray/grayArtP2.png';
import scarlettAv from './img/scarlett/scarlettAv.jpg';
import scarlettArticle from './img/scarlett/scarlettArticle.png';
import scarlettFamily from './img/scarlett/scarlettFamily.jpg';

const styles = {
  drawer_container: {
    backgroundColor: '#1fd390',
    height: '100%'
  },
  // drawer_header: {
  //   margin: '0px',
  //   paddingBottom: '10px'
  // },
  drawer_header_container: {
    padding: '10px'
  },
  body_header: {
    margin: '0px',
    padding: '10px'
  },
  responsive_toggler: {
    width: 250,
    paddingTop: 15
  },
  iconStyles: {
    marginTop: 60
  },
  linkText: {
    textDecoration: 'none',
    color: 'black'
  }
};

class App extends Component {
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
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/App.js"
                  target="_blank"
                  secondary={true}
                  icon={
                    <SvgIcon width={24} height={22} viewBox="0 0 1800 1800">
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
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <h1 style={styles.body_header}>Home Page</h1>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  <Card>
                    <CardHeader
                      title="The Gray Family - Mullumbibmy"
                      subtitle="1934"
                      avatar={grayAv}
                    />
                    <CardMedia
                      overlay={
                        <CardTitle
                          title=""
                          subtitle="Milton Samios behind soda fountain at left and probably Alex on the right (Courtesy Jim Samios)"
                        />
                      }
                    >
                      <img
                        src={grayFamily}
                        alt="Milton Samios behind soda fountain at left and probably Alex on the right (Courtesy Jim Samios)"
                      />
                    </CardMedia>
                    <CardTitle
                      title="Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
                      subtitle=""
                    />
                    <CardText>
                      <img
                        src={grayArtP1}
                        alt="First half of Article on Gray Family"
                      />
                      <img
                        src={grayArtP2}
                        alt="Second half of Article on Gray Family"
                      />
                    </CardText>
                    <CardActions>
                      <FlatButton label="Trove">
                        <a href="http://trove.nla.gov.au/newspaper/article/190722784?browse=ndp%3Abrowse%2Ftitle%2FT%2Ftitle%2F1007%2F1922%2F02%2F08%2Fpage%2F21492780%2Farticle%2F190722784">
                          The Tweed Daily, Mullimbimby, Feburary 8, 1922.
                        </a>
                      </FlatButton>
                      <FlatButton label="Ancestory">
                        <a href="http://freepages.history.rootsweb.ancestry.com/~aliens/chapter_2.htm">
                          Aliens of the Tweed and Brunswick
                        </a>
                      </FlatButton>
                    </CardActions>
                  </Card>
                </div>
                <hr />
                <div className="col-sm-6">
                  <Card>
                    <CardHeader
                      title="Sir James Scarlett"
                      subtitle="James Scarlett, 1st Baron Abinger, (13 December 1769 – 17 April 1844)"
                      avatar={scarlettAv}
                    />
                    <CardMedia
                      overlay={
                        <CardTitle
                          title="The Scarlett Family"
                          subtitle="Raymond Married Josephine in 1917"
                        />
                      }
                    >
                      <img src={scarlettFamily} alt="The Scarlett Family" />
                    </CardMedia>
                    <CardTitle title="Family Home" subtitle="" />
                    <CardText>
                      <img src={scarlettArticle} alt="The Scarlett Family" />
                    </CardText>
                    <CardActions>
                      <FlatButton label="Trove">
                        <a href="http://trove.nla.gov.au/newspaper/article/154972483?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1917%2F06%2F26%2Fpage%2F18601136%2Farticle%2F154972483">
                          The Melbourne Age, Tuesday 26th June, 1917
                        </a>
                      </FlatButton>
                      <FlatButton label="Wikipedia">
                        <a href="https://en.wikipedia.org/wiki/James_Scarlett,_1st_Baron_Abinger">
                          James Scarlett, 1st Baron Abinger
                        </a>
                      </FlatButton>
                    </CardActions>
                  </Card>
                </div>
                <hr />
                <div className="col-sm-6">
                  <Card>
                    <CardHeader
                      title="Sheila Gray"
                      subtitle="1934"
                      avatar={grayAv}
                    />
                    <CardMedia
                      overlay={
                        <CardTitle title="The Gray Family" subtitle="1898" />
                      }
                    >
                      <img src={grayFamily} alt="The Gray Family" />
                    </CardMedia>
                    <CardTitle
                      title="Family Home"
                      subtitle=" Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
                    />
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla
                      facilisi. Donec vulputate interdum sollicitudin. Nunc
                      lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                      mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                      <FlatButton label="Action1" />
                      <FlatButton label="Action2" />
                    </CardActions>
                  </Card>
                </div>
                <hr />
                <div className="col-sm-6">
                  <Card>
                    <CardHeader
                      title="Sheila Gray"
                      subtitle="1934"
                      avatar={grayAv}
                    />
                    <CardMedia
                      overlay={
                        <CardTitle title="The Gray Family" subtitle="1898" />
                      }
                    >
                      <img src={grayFamily} alt="The Gray Family" />
                    </CardMedia>
                    <CardTitle
                      title="Family Home"
                      subtitle=" Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
                    />
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla
                      facilisi. Donec vulputate interdum sollicitudin. Nunc
                      lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                      mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                      <FlatButton label="Action1" />
                      <FlatButton label="Action2" />
                    </CardActions>
                  </Card>
                </div>
                <hr />
              </div>
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired
};

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
