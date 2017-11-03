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
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TruganiniAv from '../img/Truganini.jpg';

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

class Truganini extends Component {
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
              title="TRUGANINI"
              iconElementRight={
                <FlatButton
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/components/people/women/Truganini.js"
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
                  <ListItem>
                    <ListItem leftAvatar={<Avatar src={TruganiniAv} />} />
                  </ListItem>
                  <CardTitle
                    title="Truganini"
                    subtitle="Truganini - negotiator, diplomat and guerilla fighter"
                  />
                  <CardText>
                    Aboriginal women in colonial Australia such as Truganini,
                    Fanny Cochrane Smith and Cora Gooseberry led lives that were
                    very different from their ancestors'. Their challenge was to
                    find meaning in a world where their traditional ways and
                    lands were changed. One of the foremost Tasmanian Aboriginal
                    leaders of the 1800s, Truganini was a negotiator and
                    spokesperson for her people. Truganini was born in 1812 on
                    Bruny Island which is in the D'Entrecasteaux Channel, south
                    of present day Hobart. Her early life was typical of many
                    young Aboriginal women of Tasmania in the early 1800s.
                    Before she was seventeen, her mother had been killed by
                    whalers, her uncle had been shot by a soldier and three of
                    her sisters had been abducted and sold to sealers (one of
                    whom was also shot by a sealer). Her betrothed, Paraweena,
                    was drowned in the Channel by timber sawyers. In 1832
                    Truganini and her husband Wooraddy helped find the remaining
                    Tasmanian Aborigines as part of a plan to re-settle them on
                    Flinders Island at Wybaleena. In 1838, Truganini was part of
                    a guerilla war campaign at Port Philip, Victoria with a
                    group of other Tasmanian Aborigines - the men later executed
                    in Melbourne's first public execution. Truganini returned to
                    Wybaleena in 1842. In 1847, Truganini and the remaining 45
                    people were moved to Oyster Cove, Truganini's traditional
                    country. Truganini died in 1876. Her skeleton was displayed
                    at the Tasmanian Museum until 1947. In 1976 her remains were
                    cremated and scattered in the D'Entrecasteaux Channel
                    according to her wishes. Samples of her skin and hair were
                    finally returned from the British College of Surgeons in
                    2002. A shell necklace attributed to Truganini was found in
                    a southern England museum in 2001. (The Age, 30 May 2002)
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

Truganini.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Truganini);
