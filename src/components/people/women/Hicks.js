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

class Hicks extends Component {
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
                    title="Mary Ann Hicks (McKenzie)"
                    subtitle="A Thirroul Pioneering Woman"
                  />
                  <CardText>
                    Born at Fairy Meadow, in 1839, Mary Ann McKenzie was the
                    first Illawarra-born child of Alexander McKenzie and wife
                    Anne. She married Henry Thomas Hicks on November 5 1861, and
                    so would be described on her death as one of the grand old
                    pioneers of the district. On marrying Henry Thomas Hicks she
                    became a member of the pioneering Hicks family of the
                    northern Illawarra. The family lived in various locations :
                    Russell Vale (from 1842), Austinmer - North Bulli (from
                    1843), Wollongong, Towradgi and Thirroul - Robbinsville
                    (circa 1880's).
                  </CardText>
                  <Subheader>
                    Parents Alexander McKenzie and Anne McLean
                  </Subheader>
                  <CardText>
                    Alexander McKenzie, father of Mary Ann McKenzie, was born on
                    the Isle of Skye in 1803, and had married Anne McLean in
                    1829 at Armadale, on the Isle of Skye in the Parish of
                    Sleat. They travelled to Australia, on a bounty ship in 1837
                    (the William Nicol), with their elder 4 children: Daniel b
                    1831 Armadale, Isle of Skye Donald b 1832 Armadale, Isle of
                    Skye Alexander b 1834 Armadale, Isle of Skye John b 1835
                    Armadale, Isle of Skye. Four more children were born in the
                    Illawarra : Mary Ann b 1839 Fairy Meadow, NSW Catherine b
                    1842 Berkley, NSW Agnes b 1843 Springhill, NSW d 1844
                    Another child, Anne, died 1846 Berkeley
                  </CardText>
                  <Subheader>Settling in Ellengowan</Subheader>
                  <CardText>
                    In Australia, Mary Ann's father, Alexander McKenzie of
                    Ellengowan became active in the Illawarra Agricultural and
                    Horticultural Society for much of the 1850-60's. Ellengowan
                    was in the Fairy Meadow - Parameadows area - which was the
                    site of a battle between the Bong Bong tribe and a
                    Wollongong tribe 4/3/1827 - known as the Battle of
                    Parameadows. Following first wife Ann's death, Alexander had
                    remarried in 1849 at Parramatta to Elizabeth Hanks, they had
                    eight children : Elizabeth b 1850 Balgownie, NSW Robert b
                    1851 Balgownie, NSW Hugh b 1853 Balgownie, NSW Thomas b 1854
                    Bulli, NSW Anne b 1858 Bulli, NSW Flora b 1860 Bulli, NSW
                    Charles b 1861 Bulli, NSW Christina b 1863 Taralga, Goulburn
                  </CardText>
                  <Subheader>
                    Marriage of Mary Ann McKenzie to Henry Thomas Hicks
                  </Subheader>
                  <CardText>
                    On 5.11.1861, Mary Ann McKenzie married Henry Thomas Hicks,
                    the eldest son of James and Margaret Hicks of Austinmer,
                    then known as North Bulli. Mary Ann and Henry Thomas Hicks
                    lived on Hicks Farm in Thirroul, with their ten surviving
                    children, four did not survive - 14 children in total! One
                    wonders how much time Mary Ann had for herself in bearing 14
                    children over the twenty five years of 1862-1887 ?
                  </CardText>
                  <Subheader>Children of Mary Ann Hicks</Subheader>
                  <List>
                    <ListItem>Ann Hicks (1862-1862)</ListItem>
                    <ListItem>Catherine Hicks (1862-1862) </ListItem>
                    <ListItem>
                      James Alexander Hicks (1863 – 1939) married 1890 Edith
                      Jones (?- 1896)
                    </ListItem>
                    <ListItem>
                      Margaret Minnie Hicks (1865 – 1952 ) married 1899 Alfred
                      Cook (?- 1930) nb Alfred was brother of Alexander Cook
                    </ListItem>
                    <ListItem>
                      Alexander Henry Hicks (1866-1957) married 1884 Esther Mary
                      Armstrong (1864-1918) - see North Illawarra local
                      government nomination 1898 - elected mayor 1905 - a former
                      mayor of North Illawarra Council.
                    </ListItem>
                    <ListItem>Henry William Hicks (1868-1973)</ListItem>
                    <ListItem>Unknown Male Hicks (1869-1869)</ListItem>
                    <ListItem>
                      Mary Alice Hicks (9.1.1871-5.9.1945) married 1929
                      Alexander Cook (nb his second marriage) – Alexander was
                      also brother of Alfred Cook
                    </ListItem>
                    <ListItem>
                      George Hicks (19.1.1873- 1956) married Lucy (Lou) Ann
                      Keene – Australian Light Horse military history - Boer
                      Wars, WWI
                    </ListItem>
                    <ListItem>
                      Christina Ann Hicks (4.2.1875 – 1951) married 26.1.1903
                      Edward Woolley (1870-1935) – Woolley family history
                    </ListItem>
                    <ListItem>
                      Henry Thomas Hicks (28.4.1877 -1944 or 1946) married 1898
                      Eva Kate Bottomly
                    </ListItem>
                    <ListItem>
                      Edith Florence Hicks (25.3.1880 – 9.4.1958) married
                      (11.9.1901) John Charles Joy (26.12.1873 – 24.2.1910)
                    </ListItem>
                    <ListItem>
                      Ida McKenzie Hicks (10.9.1883?- 1967) married 1912 Arthur
                      Frederick Webb
                    </ListItem>
                    <ListItem>
                      Richard Ernest Hicks (4.9.1887 ?- 1953) married 1913
                      Teresa Catherine Creevey (1885-1963)
                    </ListItem>
                  </List>
                  <CardText>
                    As kids we heard that Mary Ann and Henry Thomas Hicks had
                    the orchards, also known as Hicks Farm. There were also
                    stories of Mary Ann Hicks living at "Mount Hope" near the
                    Thirroul Railway Station - Mary Ann's Bible shows her
                    address as "Mount Hope". Many of the children of Mary Ann
                    and Henry Thomas Hicks had left Thirroul over the years,
                    moving to Sydney and further north. Daughter Mary Alice
                    Hicks remained at home, caring for Mary Ann for many years
                    at Thirroul, before finally marrying widower Alfred Cook in
                    1929 when she was in her late 50's. Alfred was also the
                    brother of Alexander Cook, husband of Mary Alice's oldest
                    sister, Margaret Minnie. Another daughter, the widow Edith
                    Florence Joy, appears to have returned to care for her
                    mother in her last years.
                  </CardText>
                  <Subheader>Death of Mary Ann Hicks</Subheader>
                  <CardText>
                    Years ago, I recall seeing a beautiful tribute to Mary Ann,
                    written in an old Church Parish newsletter (St David's
                    Thirroul). Mary Ann had lived past 90 years of age, until
                    her death in 1930. And the March 1930 Church Parish
                    newsletter had later been safely stored away by her great
                    granddaughter, Joan Adams (nee Callcott - who was also my
                    mother). In working through my late mother's papers and
                    books, I took some time to find the obituaries. Predictably
                    among the last items to surface, at the bottom of large
                    chest of drawers, finally enabling a window into some of
                    Mary Ann's personal life. Re-reading them maybe 2 or 3
                    decades since I last saw them, these tributes now have even
                    more meaning for me. Click to read tributes to Mary Ann
                    Hicks nee McKenzie. Mary Ann Hicks died at her home,
                    "Everest", in Seaview Terrace Thirroul on February 23 1930 -
                    see death notice Sydney Morning Herald February 24 1930.
                  </CardText>
                  <CardActions>
                    <FlatButton label="KerrieAnne Christian">
                      <a
                        href="http://lingeringonwomenthirrou.blogspot.com.au/2012/11/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        lingalonga - stories of women and thirroul
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

Hicks.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Hicks);
