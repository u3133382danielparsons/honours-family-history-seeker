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

class Molly extends Component {
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
                    title="Molly Kelly (Craig)"
                    subtitle="The Mardudjara people"
                  />
                  <CardText>
                    In 1931 the then Molly Craig, probably 14, and two younger
                    girls were taken from their families in the East Pilbara and
                    transported to Moore River, north of Perth. The three girls
                    escaped the next day and began their walk home to Jigalong.
                    The journey of 1600 kilometres took nine weeks and ranks as
                    one of the most remarkable feats of endurance and courage in
                    Australian history, and dramatised a dark side of the
                    Australian story. Molly was taken to the Moore River
                    settlement again in 1940, this time with her two little
                    daughters. She ran away in 1941, carrying 18-month-old
                    Annabelle and leaving Doris, four, to fend for herself with
                    a relative's help. It was 21 years before Doris was reunited
                    with her mother, a meeting which led to Doris Pilkington
                    Garimara's book Follow the Rabbit-Proof Fence and then the
                    movie directed by Phillip Noyce. Annabelle, who is now Anna
                    Wyld, had not seen her mother since being taken from her in
                    1943 and told she was an orphan. However, she sent gifts
                    last August, delivered by her own daughter, Helen. Ms
                    Pilkington Garimara said yesterday that Molly had asked
                    every year for any news of Annabelle. She cradled
                    Annabelle's gifts and said to Helen: "Your mother should
                    have brought these here herself." Molly's forebears, the
                    Mardudjara people, left their desert homelands in the face
                    of white settlement to make Jigalong their permanent
                    "sitting-down place". Her father was Thomas Craig, an
                    Englishman employed as a fence inspector; her mother an
                    Aborigine called Maude. Molly, her sister Daisy Burungu and
                    cousin Gracie Fields were taken away in the belief that
                    part-Aboriginal children should be trained as domestic
                    servants. A. O. Neville, chief protector of Aborigines in
                    Western Australia, said in 1937: "Are we going to have a
                    population of 1 million blacks in the Commonwealth or are we
                    going to merge them into our white community and eventually
                    forget that there ever were any Aborigines in Australia?"
                    Molly decided that, since Jigalong was on the rabbit-proof
                    fence that ran through Western Australia, if the three girls
                    headed east from Moore River to the fence and then north,
                    they couldn't miss. The girls crossed a flooded river, sand
                    dunes, heathlands, wheatbelt, mallee country, gibber plains,
                    red dust and mulga country, spinifex country, claypan and
                    salt lake. They slept in dug-out rabbit burrows, caught and
                    cooked rabbits, and ate bibijali, a kind of sweet potato,
                    and karkula, a wild banana. When their legs were weary, sore
                    and infected by grass cuts, Molly piggy-backed Daisy, about
                    eight, and Gracie, 11, in turn. Molly married Toby Kelly, an
                    Aboriginal stockman, and Doris was born under a wintamarra
                    (mulga) tree on Balfour Downs station, where the couple
                    worked. Molly cut the umbilical cord with a butcher's knife,
                    tied the knot and put her in a shoe box. Ms Pilkington
                    Garimara said yesterday: "Mum's legacy is the calming
                    influence and quiet dignity of the desert women, and the
                    stolen generations story. She looked you straight in the
                    eye."
                  </CardText>
                  <CardActions>
                    <FlatButton label="smh.com.au">
                      <a
                        href="http://www.smh.com.au/articles/2004/01/14/1073877902433.html"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Molly Kelly
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

Molly.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Molly);
