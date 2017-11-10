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
import GrayAv from '../../../img/gray/grayAv.jpg';

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

class HenryGray extends Component {
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
                    <ListItem leftAvatar={<Avatar src={GrayAv} />} />
                  </List>
                  <CardTitle
                    title="Gray, William Henry (1843–1929)"
                    subtitle="Dairy Industry North Coast Lismore, Mullumbimby"
                  />

                  <CardText>
                    The late Mr. and Mrs. W. H. Gray, of 10 Wyrallah road,
                    Lismore, who died within a few hours of each other on
                    Tuesday, were buried in adjoining graves at the Methodist
                    portion of the Lismore general cemetery yesterday afternoon.
                    In the large and representative attendance at the funeral
                    there was a tribute to the lives of two district pioneers
                    and their sterling character. The pall bearers were: Messrs
                    G. Mortimer, E. Johnston, J. J. Gray, N. C. Gray, E. Morrow,
                    A. F. Gray, G. H. Gray, W. T. Gray, M. S. Gray, P. E. Gray,
                    C. B. Gray and L. Gray. Messrs. W. Riley and Son, had charge
                    of the obsequies. There was a large congregation at the
                    graveside, an impressive service being conducted by Rev. A.
                    F. Crapp, assisted by Rev. L. H. Rolph (Clunes). Prior to
                    the funeral the Rev. A. F. Crapp conducted a service at the
                    Methodist church, from which the cortege left for the
                    cemetery. A favourite hymn of the late Mrs. Gray was sung,
                    and in his address Rev. Crapp referred to the unique event
                    of husband and wife of old age passing away within a few
                    hours of each other. He spoke of their early association
                    with the district as pioneers, and loyal membership of the
                    Methodist Church. Years ago, the late Mr. and Mrs. Gray had
                    extended hospitality to ministers of the Lismore circuit,
                    and the late Mr. Gray occupied the position of circuit
                    steward for some time this being the highest position a
                    layman could be called to in the denomination. God had been
                    with them throughout their lives said Rev. Crapp, and did
                    not fail them in their old age and in the hour of death.
                    Charles Wesley's lines "My people live well and they die
                    well," were exemplified in the Christian character of Mr.
                    and Mrs. Gray. Death had no terrors for them and just before
                    the late Mrs. Gray died she sang her favourite hymn and both
                    offered prayer before passing away. Rev. Crapp added that of
                    the late Mr. and Mrs. W. H. Gray it could truly be said,
                    "Now the labourers' task is o'er; now the battle day is
                    past; now upon the farther Shore land the voyagers at last."
                    Rev. R. J. Thomas (Sydney), an old friend of the family, who
                    attended the golden and diamond wedding of the deceased,
                    will conduct a memorial service at Lismore Methodist church
                    on Sunday. Over one hundred wreaths were received from the
                    following:—Sons and daughters, jointly, two wreaths, Willie
                    Gray, Annie and family, George, Emma and family, Edward,
                    Agnes and family, John, Addie and family, Henry, Laura and
                    family, Tessie, Eva and family, Alfred, May and girlies,
                    George, Jane and family, Walter, Alice and family, Percy,
                    Amy and Earl, Jim, Alice and family, Maurice, Muriel and
                    family, Charlie, Essie and family, Victor and Olive
                    Mortimer, grandchildren at Meadow Bank, Charlie, Wallace and
                    Ruby Bower, Louisa Morrow, Lilian Gray, Lydia Gray, Aunt
                    Annie and cousins, Mr. and Mrs. J. T. Gray, Maggie and
                    brothers, Mr. and Mrs. W. A. Walmsley, Mr. and Mrs. M.
                    Dawson, J. J. Gray and family, Mr. and Mrs. S. Armstrong and
                    family, Peter and Carie Mathie, Mr. and Mrs. Stan Armstrong,
                    Mr. and Mrs. Sam Lee, Harrison family, Mr. and Mrs. J.
                    Parkes, Lismore Ladies' Methodist Church Aid Society, the
                    officers and Sir Knights of the Lismore Royal Black
                    Preceptory, No. 630, L.O.L. 128 and 374, the directors and
                    staff of the Lismore Motor Sales Company, Mr. and Mrs. W. W.
                    James (Bexhill), Mr. and Mrs. E. Paine (Eltham) (2), Mr. and
                    Mrs. H. Jarman and family, Mr. and Mrs. E. Myers (2) and
                    family, Mr. and Mrs. G. E. Dawson, Mr. and Mrs. G. J.
                    Elliott, Alma McDonald, Mr. and Mrs. G. Riches, Mr. and Mrs.
                    S. Strong (2), Mr. and Mrs. Clarke, Mr. and Mrs. Chittick
                    (2), Mr. and Mrs. R. Volckman (2), Mr. and Mrs. B. N. Frith,
                    Mr. and Mrs. W. Sida- way, Mrs. Gordon and Braun, Mr. and
                    Mrs. R. E. Johnston, Mr. and Mrs. N. H. Forster, Mr. and
                    Mrs. G. Pearson (2), Mr. and Mrs. Pepper, Mrs. G. Pearson,
                    sen., and Una, Miss Dunlop, Mr. and Mrs. F. Pearson, Mr. and
                    Mrs. J. Wilson, Mr. and Mrs. Percy, Misses M. and E. Lee,
                    Mr. and Mrs. E. V. Towner, Mr. and Mrs. Norman Johnston (2),
                    Mr. and Mrs. A. Bryant, Mr. and Mrs. W. Robinson, Mr and
                    Mrs. Geo. Towner, Mr. and Mrs. E. J. Lavis, Mr and Mrs. S.
                    Gregory, Mr. and Mrs. G. Dawes, Mr. and Mrs. W. H. James,
                    Mr. J. G. Irvine and family, Mr. and Mrs. S. M. Cottee (2),
                    Mr. and Mrs. Cook, Mr. and Mrs. D. G. Johnston, Mr. and Mrs.
                    W. F. Oakes (2), Mrs. Napper (sen.) and Mr. and Mrs. A.
                    Napper, Mr. and Mrs. J. H. Walker, Mr. and Mrs. Pearson
                    (Corndale), Mr. and Mrs. S. McC. Hewitson, Nurse McFadgean,
                    Mr. and Mrs. J. D. McDonald, Mr. and Mrs. Nethery, Mr. and
                    Mrs. H. Pearson, Mr. and Mrs. D. A. Johnston, Mr. and Mrs.
                    H. Crawford, Mr. and Mrs. J. C. Fredericksen, Mrs. Hellyar
                    and family, Mr. and Mrs. G. B. Somerville, Mr. and.Mrs. E.
                    Blanch, Mr. and Mrs. N. A. Newton, Mr. and Mrs. A. J.
                    Wright, Mr. and Mrs. A. G. Alcorn, Mrs. Herman and family,
                    Mr. G. Oliver, Mr. and Mrs. Wesley, Mr. and Mrs. H.
                    Alexander, Mr. and Mrs. J. Alexander, Mr. and Mrs. Chadwick,
                    Mrs. Crawford, sen. and family, Mr. and Mrs. F. Gibson, Mr.
                    and Mrs. J. J. Weir, Mrs. Deeves and family, Mr. and Mrs. J.
                    A. Fredericksen, Mr, and Mrs. E. S. Barnes, Jessie Brown and
                    brothers, Mr. and Mrs. H. E. Blanch. Telegrams were received
                    from Mr. and Mrs. H. Miller (Omega), Mr. and Mrs. Austin and
                    girls (Sydney), Mrs. Coleman (Guilford), Bella Miller
                    (Kiama), Mr. and Mrs. P. Miller (Gerringong), Mt. and Mrs.
                    Robinson (Rous Mill), Mr. and Mrs. Fields (Dapto), Mr. and
                    Mrs. Stan Miller (Kiama), Mrs. M. Miller (Chatswood), Mrs.
                    Cook, and family (Gerringong), Mr. and Mrs. J. B. Miller
                    (Wingewal), Mr. and Mrs. G. Miller (Sydney), Mr. and Mrs. R.
                    Gray (Toowoomba), C. W. Craig (Kiama) (2), Lilian Morrow
                    (Southport), W. C. Gray (Pomona). The late Mr. and Mrs. Gray
                    were both natives of the South Coast, coming to the Richmond
                    from Kiaina district. The late Mr. Gray's parents came from
                    the north of Ireland in 1843, accompanied by three
                    daughters. The late Mrs. Gray's parents, Mr. and Mrs. N.
                    Craig, who were married just prior to sailing for Australia,
                    came from Cornwall in 1838. The late Mr. and Mrs. Gray were
                    married at "Orange Grove,'' the residence of the bride's
                    parents at Kiama, on December 29, 1865, by the Rev. Angwin.
                    For three years the late Mr. Gray was a member of Gerringong
                    Muni- cipal Council, and for nearly 50 years he had been a
                    Justice of the Peace. Forty years ago he and his wife came
                    to the North Coast and settled at Cowlong, having then a
                    family of eight sons and four daughters. Two sons were born
                    after they came to the Richmond. The late Mr. Gray's name
                    has been closely associated with the history of the dairying
                    industry of the North Coast ever since its infancy. About 37
                    years ago he installed a butter making plant, primarily for
                    his own use, although he also made it available to
                    neighbours. It could almost be said he ran a butter factory
                    for years. He joined Norco Ltd. and was a staunch supporter,
                    being chairman for three years and a director for many
                    years. The late Mr. and Mrs. Gray were loyal members of the
                    Methodist Church, and the late Mr. Gray was superintendent
                    of the Methodist Sunday school at Cowlong for 27 years,
                    later occupying the position of circuit steward at Lismore.
                    The late Mr. and Mrs. Gray celebrated their golden wedding
                    at "Meadow Bank,'' Eltham on December 29, 1915, and their
                    diamond wedding on the same date in 1925 at the Richmond
                    Hall, Lismore. At the diamond wedding it was mentioned that
                    the Gray family was represented by 13 sons and daughters, 14
                    sons-in-law and daughters-in-law, 70 grandchildren, and 20
                    great-grandchildren, making a total of 129 descendants. Mrs.
                    G. Mortimer (Mullumbimby), Mrs. E. Johnston (Pearce's
                    Creek), Mrs. W. H. Morrow (Pearce's Creek), Mrs. J. Millar
                    (Gerringong) are daughters; and Messrs. W. C. Gray (Pomona,
                    Q.), N. C. Gray (Bonalbo), G.H. Gray (Parramatta), W. T.
                    Gray (Lismore), M. S. Gray (Lismore), J. J. Gray (Eltham),
                    A. P. Gray (Eltham), P. E. Gray (Eltham), C. B. Gray
                    (Eltham) are sons. A son, Arthur, died about five years ago
                    and Mrs. W. C. Gray, a daughter-in-law, recently died in
                    Sydney.
                  </CardText>
                  <CardActions>
                    <FlatButton label="northernstar.com.au">
                      <a
                        href="http://oa.anu.edu.au/obituary/gray-william-henry-16583"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Butter Factory
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

HenryGray.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HenryGray);
