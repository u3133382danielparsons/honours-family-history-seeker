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

class Georgiana extends Component {
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
                  <CardTitle
                    title="Georgiana McCrae"
                    subtitle="The life of Georgiana McCrae - an aristocratic woman in early Melbourne"
                  />
                  <CardText>
                    Georgiana McCrae was a daughter of the Duke of Gordon. In
                    Britain she was recognised as an excellent painter and in
                    1820, at the age of 16, she won a silver medal from the
                    Royal Society of Arts for her work. In 1830 Georgiana
                    married Andrew McCrae, a lawyer who initially practised in
                    Edinburgh. In 1838, he booked passage to Australia, which he
                    believed offered huge opportunities. Georgiana, unable to
                    travel at that time due to illness, is said to have raised
                    the funds to purchase passage by painting miniatures, as
                    well as receiving help from the Duke's second wife. She and
                    her children landed at Port Phillip on 1 March 1841. When
                    Georgiana arrived in Melbourne the settlement was only five
                    years old and was a virtual shanty town. The cottage her
                    husband had rented in Lonsdale Street was nothing like
                    Gordon Castle, where Georgiana had lived in her youth. The
                    cottage had an outdoor toilet, mud and animal faeces
                    underfoot and a hole in the roof for the cooking fire smoke
                    to escape. The privileged life she had led as a member of
                    the English upper class was well and truly over. In February
                    1842 they moved to Mayfield, on the Yarra River (near
                    Studley Park), designed by her and described as 'one of the
                    first superior houses erected in the Colony'. In 1843 Andrew
                    took up the 'Arthur's Seat' run near Dromana, and there
                    built a house in which the family lived from 1845 to 1851.
                    Georgiana is said to have welcomed local Aboriginal people
                    when they passed through each year. Georgiana was
                    acknowledged by other runholders for being as useful as a
                    drover among cattle and horses, and was renowned as a
                    'medicine woman'. Although her husband moved about,
                    including going to the goldfields, Georgiana remained in
                    Melbourne. There she died in 1890 at the age of 85. Today
                    she is remembered as a true Melbourne pioneer, an
                    accomplished artist and brave woman.
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
                    <FlatButton label="Australian Dictionary of Biography">
                      <a
                        href="http://adb.anu.edu.au/biography/mccrae-georgiana-huntly-2392"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Australian Dictionary of Biography - McCrae, Georgiana
                        Huntly (1804–1890) - by Norman Cowper
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

Georgiana.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Georgiana);
