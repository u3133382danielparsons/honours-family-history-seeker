// Node modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// src
import DashboardNav from '../../dashboard/DashboardNav';

// Material-ui
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from '../../../material-ui-responsive-drawer/index.js';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
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

class Chisholm extends Component {
  render() {
    return (
      <div>
        <div>
          <ResponsiveDrawer openSecondary={false}>
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header_container}>
                <DashboardNav />
              </div>
            </div>
          </ResponsiveDrawer>
          <BodyContainer openSecondary={false}>
            <ResponsiveAppBar
              iconElementRight={
                <FlatButton
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/containers/About.js"
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
            <header>
              <Link to="../../../containers/People">
                <Subheader>FAMILY HISTORY SEEKER</Subheader>
                <IconButton tooltip="PEOPLE PAGE">
                  <svg
                    fill="#1fbcd3"
                    height="48"
                    viewBox="0 0 24 24"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </IconButton>
                <Subheader style={styles.subheaderColor}>PEOPLE</Subheader>
              </Link>
            </header>
            <div className="container">
              <Paper zDepth={1}>
                <Card>
                  <CardTitle
                    title="Caroline Chisolm"
                    subtitle="Bounty immigrant women and Caroline Chisholm"
                  />
                  <CardText>
                    Young women, often orphans, servants or factory workers,
                    were actively recruited with low priced 'bounty' tickets to
                    Australia in an effort to balance the male-female ratio in
                    the new colonies. Many of the young 'bounty' girls who
                    arrived in Sydney and Melbourne found themselves in a
                    miserable situation, with little but prostitution and crime
                    to sustain them. Caroline Chisholm, the wife of a British
                    soldier, arrived in Sydney in September 1838. There she saw
                    the misery of unemployed immigrant women who lived on the
                    streets in the areas known as the Rocks, not far from the
                    wharves where the ships arrived. Caroline began helping some
                    of these women find work and took others into her home. She
                    taught them the basics of housekeeping and cooking so they
                    could be employed in the homes of the middle and upper
                    classes. While her husband was fighting in the Opium Wars in
                    China, Caroline convinced Governor Gipps to let her use an
                    old shed as a welfare agency. She and her sons moved into
                    the 45-foot long shed that was home to thousands of rats.
                    Within a short time, it was also home to 100 women. Caroline
                    worked hard to educate the women and get them paid work. She
                    expanded her welfare agency beyond Sydney, setting up
                    sixteen emigrant women's hostels around the colony. Female
                    'bounty' immigration continued. From 1848 to 1886 the Female
                    Immigration Depot, housed at Hyde Park Barracks, was the
                    main reception and hiring depot in Sydney for 'unprotected'
                    females. The depot received thousands of working-class
                    Irish, English, Scottish and Welsh female immigrants during
                    its 38 years of operation. Caroline died in England in 1877,
                    recognised as leading social reformer. She is remembered in
                    Australia today by many schools that bear her name, the
                    Caroline Chisholm Society, the federal electorate of
                    Chisholm in Victoria, the Caroline Chisholm Centre for
                    Health Ethics and many other charitable and social
                    organisations, awards and foundations. For many years her
                    image graced our $5 note.
                  </CardText>
                  <CardActions>
                    <FlatButton label="australia.gov.au">
                      <a
                        href="http://www.australia.gov.au/about-australia/australian-story/women-in-colonial-times"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Women in colonial times
                      </a>
                    </FlatButton>
                  </CardActions>
                </Card>
              </Paper>
            </div>
          </BodyContainer>
        </div>
      </div>
    );
  }
}

Chisholm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Chisholm);
