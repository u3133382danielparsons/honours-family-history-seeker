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
import HollingworthAv from '../../../img/hollingworth/HollingworthAv.jpg';

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

class ThomasHollingworth extends Component {
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
                    <ListItem leftAvatar={<Avatar src={HollingworthAv} />} />
                  </List>
                  <CardTitle
                    title="Thomas Hollingworth"
                    subtitle="Proud family began with theft of a coat and a gun. by Margaret Henderson"
                  />
                  <CardText>
                    THOMAS Nicholson Hollingworth, the founder of the
                    Hollingworth family in our area, was a convict sentenced in
                    1836 to life imprisonment for stealing a gun and a coat.
                    When he arrived in New South Wales he was assigned to the
                    Busby Brothers as a labourer and came with them to the
                    Richmond River about 1844. He obtained his Ticket of Leave
                    soon afterwards in 1845 and remained in the area when the
                    Busby Brothers left. He received his conditional pardon in
                    1853. In 1847 he married Ann King at Grafton. Ann was a
                    daughter of William Parrott King and his wife Hannah (nee
                    Barrett) who had arrived as immigrants. William King had
                    obtained work first as a shepherd and then as a bullock
                    driver. For some years he hauled cedar logs to the river at
                    Tucki where they were loaded onto sailing ships or rafted
                    downstream. Later he worked for William Yabsley at Coraki as
                    a sawyer. Thomas and Ann Hollingworth moved to Lismore
                    possibly to be closer to her family. Thomas obtained a
                    92-acre conditional purchase property just west of the
                    Richmond River and on the southern side of a creek leading
                    into the Richmond. This property is now part of South
                    Lismore and the creek is called Hollingworth Creek, after
                    Thomas. The Bruxner Highway crosses Hollingworth Creek and
                    for many years the bridge was labelled "Hollingsworth Creek"
                    (with an "s"), much to the disgust of family members. A
                    campaign, led by descendant Nicholson (Nick) Hollingworth,
                    had the "s" removed in recent years. Thomas and Ann's second
                    son, Joseph Nicholson Hollingworth, initially worked for his
                    uncle, Thomas King, at Woodburn. Thomas King had been
                    apprenticed as a shipwright to William Yabsley. Yabsley had
                    provided a tutor to educate his apprentices as well as
                    giving them a sound knowledge of their craft. Much of this
                    knowledge was passed on by Thomas King to Joseph
                    Hollingworth who some time later took up an apprenticeship
                    with sawmill owner, J.E. Glasgow, at Lismore. He eventually
                    became a millwright and master sawmiller with a vast
                    knowledge of local timbers from throughout the whole region.
                    Joseph married Annie McAndrew Ross in 1892 and in 1902 he
                    purchased Glasgow's sawmill at Mullumbimby. He moved his
                    growing family there and began what was to become a major
                    role in the timber industry of the North Coast. He obtained
                    timber licences for large areas of forest land and later
                    other mills were built so that the timber could be processed
                    closer to its source. For a time he was in partnership with
                    a cousin, Robert Raymond Mallett, who had worked in the
                    timber industry for many years and had a fine knowledge of
                    marketing as well as species of timber. Joseph and Annie had
                    only one son, David John Hollingworth, and he was to follow
                    his father into the business. He began work there in 1916 at
                    the age of 14 years. Unfortunately, Joseph contracted
                    influenza in 1919 during the epidemic abd died. At 17, David
                    was considered too young to hold the reins. The business
                    became a company and a manager was employed. David, however,
                    continued in the business until it was sold to Standard
                    Sawmill Co. of Murwillumbah in 1964, and his son, Nicholson
                    (Nick) Hollingworth, was also employed there. Standard Mills
                    had made the purchase solely to obtain the lucrative timber
                    licences held by the mill, and so they closed down the
                    Mullumbimby operation, putting many men out of work.
                  </CardText>
                  <CardActions>
                    <FlatButton label="northernstar.com.au">
                      <a
                        href="https://www.northernstar.com.au/news/proud-family-began-with-theft-of-coat-gun/1891818/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Proud family began with theft of a coat and a gun
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

ThomasHollingworth.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ThomasHollingworth);
