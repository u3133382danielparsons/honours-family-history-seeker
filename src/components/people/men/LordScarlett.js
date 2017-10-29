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

class LordScarlett extends Component {
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
                    title="James Scarlett"
                    subtitle="1st Baron Abinger"
                  />
                  <CardText>
                    Scarlett was born in Jamaica, where his father, Robert
                    Scarlett, had property. In the summer of 1785 he was sent to
                    England to complete his education at Hawkshead Grammar
                    School and afterwards at Trinity College, Cambridge, taking
                    his B.A. degree in 1789. Having entered the Inner Temple he
                    took the advice of Samuel Romilly, studied law on his own
                    for a year, and then was taught by George Wood. He was
                    called to the bar in 1791, and joined the northern circuit
                    and the Lancashire sessions. Though Scarlett had no
                    professional connections, he gradually obtained a large
                    practice, ultimately confining himself to the Court of
                    King's Bench and the northern circuit. He took silk in 1816,
                    and from this time till the close of 1834 he was the most
                    successful lawyer at the bar; he was particularly effective
                    before a jury, and his income reached £18,500, a large sum
                    for that period. He first entered parliament in 1819 as Whig
                    member for Peterborough, representing that constituency with
                    a short break (1822–1823) till 1830, when he was elected for
                    the borough of Malton. He became Attorney General, and was
                    made a Knight Bachelor when Canning formed his ministry in
                    1827; and though he resigned when the Duke of Wellington
                    came into power in 1828, he resumed office in 1829 and went
                    out with the Duke in 1830. His opposition to the Reform Bill
                    caused him to leave the Whigs and join the Tories, and he
                    was elected, first for Cockermouth in 1831 and then in 1832
                    for Norwich, for which he sat until the dissolution of
                    parliament in 1835. He was appointed Lord Chief Baron of the
                    Exchequer in 1834, and presided in that court for more than
                    nine years. He was appointed to the Privy Council at the end
                    of that year. He was raised to the peerage as Baron Abinger,
                    of Abinger in the County of Surrey and of the City of
                    Norwich in 1835, taking his title from the Surrey estate he
                    had bought in 1813. The qualities which brought him success
                    at the bar were not equalled on the bench; he had a
                    reputation for unfairness, and complaints were made about
                    his domineering attitude towards juries. While he was
                    studying in England, he became the guardian of Edward
                    Moulton, who later assumed his mother's family name, and
                    became the father of the poet Elizabeth Barrett, later
                    Elizabeth Barrett Browining. The Scarletts and the Barretts
                    had been friends for many years in Jamaica, and it seems
                    natural that James Scarlett would have been selected to keep
                    an eye on young Moulton, while the boy was at school in
                    England. In a note prefixed to the Collected Edition of his
                    wife's poems, Robert Browning tells us that "On the early
                    death of his father, he (Edward Moulton) was brought from
                    Jamaica to England when a very young child, as ward to the
                    late Chief Baron Lord Abinger, then Mr. Scarlett, whom he
                    frequently accompanied in his post-chaise when on pursuit."
                    Lord Abinger was twice married (the second time only six
                    months before his death), and by his first wife (d. 1829)
                    had three sons and two daughters, the title passing to his
                    eldest son, Robert. His second son was General Sir James
                    Yorke Scarlett, leader of the heavy cavalry charge at
                    Balaklava. His third son, Peter Campbell Scarlett, was a
                    diplomat. His elder daughter, Mary, married John Campbell,
                    1st Baron Campbell, and was herself created Baroness
                    Stratheden. Sir William Anglin Scarlett, Lord Abinger's
                    younger brother, was chief justice of Jamaica. While
                    attending the Norfolk circuit on 2 April, Lord Abinger was
                    suddenly seized with apoplexy, and died in his lodgings at
                    Bury. A more distant relation was the painter John Scarlett
                    Davis.
                  </CardText>
                  <CardActions>
                    <FlatButton label="wikipedia.org">
                      <a
                        href="https://en.wikipedia.org/wiki/James_Scarlett,_1st_Baron_Abinger"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        The Right Honourable The Lord Abinger
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

LordScarlett.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LordScarlett);
