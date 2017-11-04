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
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AnthonyAv from '../../../img/cordato/anthony.jpg';

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

class AnthonyCordato extends Component {
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
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/components/people/women/Georgiana.js"
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
                  <List>
                    <ListItem leftAvatar={<Avatar src={AnthonyAv} />} />
                  </List>
                  <CardTitle
                    title="Anthony Cordato"
                    subtitle="UNIQUE WEDDING"
                  />
                  <CardText>
                    Cordato – Manucoe (from Northern Star – Lismore NSW,
                    Saturday 29 July 1916) --- A wedding of an unusual
                    character, writes our casino correspondent, was solemnised
                    at St. Marks Anglican Church on Wednesday. The bride and
                    groom were both of Greek nationality, and the Greek ceremony
                    was performed. The contracting parties were Anthony Cordato,
                    of Dubbo, brother of Mr. Simon Cordato, of Casino, and
                    Anthee Manucoe of Kyogle, whose parents reside in Greece.
                    The ceremony was the first of its kind ever performed in
                    Casino, and its novelty attracted a large attendance of
                    people to the church. Father Marinakis, the only Greek
                    priest in the State, came all the way from Sydney to
                    officiate, and he was assisted by Mr. J. Black of Brisbane.
                    The bride was given away by her two brothers, Mr. Theo and
                    Mr. Peter Manucoe, and the bridesmaids were Miss Stella
                    Garland, of Maryborough, Queensland, and Miss Kathleen
                    Cordato of Casino and the best man was Mr. Jake Aroney of
                    Murwillumbah. There was a large number of friends and
                    relatives, who came from Sydney, Armidale, Glen Innes,
                    Tenterfield, Maryborough, Ipswich, Murwillumbah,
                    Mullumbimby, Lismore, Grafton and Casino. The breakfast was
                    served at Mr. Cordato’s restaurant and about 60 sat down.
                    The priest took the chair. And the usual toasts were
                    proposed and acknowledged. The National Anthems of Great
                    Britain, Greece and France were sung. At the conclusion of
                    the breakfast dancing was indulged in until early morning.
                    The happy couple left by the morning train for Byron bay,
                    where they will stay for a few days, and will leave for
                    Dubbo via Brisbane. -- Authors Notes This report of the
                    Cordato-Minucoe wedding is an important historical, social
                    and cultural document that underpins Greek migration and
                    settlement in Australia. This places Greeks in time and
                    place, their social interaction and the practise of cultural
                    traditions. Not to be over looked, the relationship of the
                    Greek Orthodox Church and the Anglican Church that has
                    continued to provide a venue for ceremonies until Greek
                    Orthodox Churches were established. Last but not least, the
                    interest of the press to record the event and the National
                    Library of Australia to preserve and provide a snap shot of
                    time past for future generations. Researched and written
                    Peter C. McCarthy (Makarthis) Inverell NSW ©S. Peter & Co. 7
                    October 2013
                  </CardText>
                  <CardActions>
                    <FlatButton label="northernstar.com.au">
                      <a
                        href="http://www.kythera-family.net/en/history/general-history/cordato-manucoe-wedding-1916"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Cordato- Manucoe Wedding 1916
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

AnthonyCordato.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AnthonyCordato);
