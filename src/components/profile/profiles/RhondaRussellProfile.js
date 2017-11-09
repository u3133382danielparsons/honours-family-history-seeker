// Node modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// src
import ProfileNav from '../../../components/profile/ProfileNav';
import Footer from '../../../components/Footer';

// Material-ui
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from '../../../material-ui-responsive-drawer/index.js';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import {
  Card,
  CardHeader,
  CardText,
  CardTitle
  // CardMedia,
  // CardTitle,
  // CardActions
} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Email from 'material-ui/svg-icons/communication/email';
import Info from 'material-ui/svg-icons/action/info';
import Work from 'material-ui/svg-icons/action/work';
import Number from 'material-ui/svg-icons/notification/confirmation-number';
import Hobbies from 'material-ui/svg-icons/av/music-video';
import Phone from 'material-ui/svg-icons/communication/phone';
import University from 'material-ui/svg-icons/av/library-books';
import Course from 'material-ui/svg-icons/image/palette';
import Location from 'material-ui/svg-icons/communication/location-on';
import Website from 'material-ui/svg-icons/content/link';
import MaryJonesAv from '../../subscribers/members/img/ava-3.png';
// inline styles
const styles = {
  drawer_container: {
    backgroundColor: '#1fd390',
    height: '100%'
  },
  drawer_header_container: {
    padding: '10px'
  }
};

class RhondaRussellProfile extends Component {
  render() {
    return (
      <div>
        <div>
          <ResponsiveDrawer openSecondary={false}>
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header_container}>
                <ProfileNav />
              </div>
            </div>
          </ResponsiveDrawer>
          <BodyContainer openSecondary={false}>
            <ResponsiveAppBar
              title="Profile"
              iconElementRight={
                <FlatButton
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/containers/RhondaRussellProfile.js"
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
            <div className="BackgroundGradient">
              <header>
                <Subheader>FAMILY HISTORY SEEKER</Subheader>
                <object title="FAMILY HISTORY SEEKER PROFILE PAGE">
                  <svg
                    fill="#1fbcd3"
                    height="48"
                    viewBox="0 0 24 24"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </object>
                <Subheader style={styles.subheaderColor}>
                  RHONDA RUSSELL
                </Subheader>
              </header>
            </div>
            <div className="container">
              <Card>
                <CardTitle title="User Profile" subtitle="Details" />
                <CardHeader
                  title="Rhonda Russell"
                  subtitle="Member of Family History Seeker since November 10, 2017"
                  avatar={MaryJonesAv}
                />
                <CardText>
                  <List>
                    <ListItem
                      primaryText="Username"
                      secondaryText="RhondaRussellfhseeker"
                      leftIcon={<Fingerprint />}
                    />
                    <ListItem
                      primaryText="Date of Birth"
                      secondaryText="20th January, 1970"
                      leftIcon={<DateRange />}
                    />
                    <ListItem
                      primaryText="Location"
                      secondaryText="Canberra, Australia"
                      leftIcon={<Location />}
                    />
                    <ListItem
                      primaryText="Personal Email"
                      secondaryText="rhondarussell@gmail.com"
                      leftIcon={<Email />}
                    />
                    <ListItem
                      primaryText="Phone Number"
                      secondaryText="0491 360 585"
                      leftIcon={<Phone />}
                    />
                    <ListItem
                      primaryText="Occupation"
                      secondaryText="Fulltime Student"
                      leftIcon={<Work />}
                    />
                    <ListItem
                      primaryText="Student ID "
                      secondaryText="u3133382"
                      leftIcon={<Number />}
                    />
                    <ListItem
                      primaryText="Interests"
                      secondaryText="Web Design, Web Development"
                      leftIcon={<Info />}
                    />
                    <ListItem
                      primaryText="Hobbies"
                      secondaryText="Football, Guitar, Reading, Watching TV"
                      leftIcon={<Hobbies />}
                    />

                    <ListItem
                      primaryText="University"
                      secondaryText="University of Canberra, Australia"
                      leftIcon={<University />}
                    />
                    <ListItem
                      primaryText="Course of Study"
                      secondaryText="Honours in Arts & Design"
                      leftIcon={<Course />}
                    />
                    <ListItem
                      primaryText="Website Link"
                      secondaryText="http://honours-family-history-seeker.herokuapp.com"
                      leftIcon={<Website />}
                    />
                    <ListItem
                      primaryText="Student Email"
                      secondaryText="u3133382@uni.canberra.edu.au"
                      leftIcon={<Email />}
                    />
                  </List>
                </CardText>
              </Card>
            </div>
            <div className="footer-background">
              <Footer />
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

RhondaRussellProfile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(
  RhondaRussellProfile
);
