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

class Spence extends Component {
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
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker/blob/master/src/components/people/women/Spence.js"
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
                    title="Helen Spence"
                    subtitle="South Australian Suffragist"
                  />
                  <CardText>
                    Catherine Helen Spence was a Scottish-born Australian
                    author, teacher, journalist, politician, leading suffragist,
                    and Georgist. Born on October 31, 1825, the fifth of a
                    family of eight born to David Spence and Helen Brodie. In
                    1897 she became Australia's first female political candidate
                    after standing (unsuccessfully) for the Federal Convention
                    held in Adelaide. Called the "Greatest Australian Woman" by
                    Miles Franklin and given the nomenclature of "Grand Old
                    Woman of Australia' on her eightieth birthday, Spence was
                    commemorated on the Australian five-dollar note issued for
                    the Centenary of Federation of Australia.
                  </CardText>
                  <Subheader>Early Years</Subheader>
                  <CardText>
                    Helen Spence considered herself well descended, going back
                    for many generations on both sides of intelligent and
                    respectable people. She wrote of herself, 'I think I was
                    well brought up, for my father and mother were of one mind
                    regarding the care of the family. I count myself well
                    educated, for the admirable woman at the head of the school
                    which I attended from the age of four and a half till I was
                    thirteen and a half, was a born teacher in advance of her
                    own times. In fact, like my own dear mother, Sarah Phin was
                    a New Woman without knowing it. The phrase was not known in
                    the eighteen thirties.'
                  </CardText>
                  <CardText>
                    Spence had a talent for writing and an urge to be read, so
                    it was natural that in her teens she became attracted to
                    journalism. Through family connections, she began with short
                    pieces and poetry published in The South Australian. She
                    also worked as a governess for some of the leading families
                    in Adelaide, at the rate of sixpence an hour. For several
                    years, Spence was the South Australian correspondent for The
                    Argus newspaper writing under her brother's name until the
                    coming of the telegraph. Her first work was the novel Clara
                    Morison: A Tale of South Australia During the Gold Fever. It
                    was initially rejected but her friend John Taylor, found a
                    publisher in J W Parker and Son and it was published in
                    1854. She received forty pounds for it, but was charged ten
                    pounds for abridging it to fit in the publisher's standard
                    format. Her second novel Tender and True was published in
                    1856, and to her delight went through a second and third
                    printing, though she never received a penny more than the
                    initial twenty pounds. Then followed her third novel,
                    published in Australia as Uphill Work and in England as Mr
                    Hogarth's Will, published in 1861 and several more though
                    some were unpublished in her lifetime including Gathered In
                    (unpublished until 1977) and Hand fasted (unpublished until
                    1984). In 1888 she published A Week In the Future, a
                    tour-tract of the utopia she imagined a century in the
                    future might bring; it was one of the precursors of Edward
                    Bellamy's 1889 Looking Backward. Her final work, called A
                    Last Word, was lost while still in manuscript form.
                  </CardText>
                  <Subheader>Improving the lot of Women and Children</Subheader>
                  <CardText>
                    Although Spence rejected both of the two proposals of
                    marriage she received during her life, and never married,
                    she had a keen interest in family life and marriage – as
                    applied to other people. Both her life's work and her
                    writing were devoted to raising the awareness of, and
                    improving the lot of, women and children. She successively
                    raised three families of orphaned children – the first being
                    those of her friend Lucy Duval. She was one of the prime
                    movers, with C. Emily Clark (sister of John Howard Clark),
                    of the "Boarding-out Society". This organization had as its
                    aim removing destitute children from the asylum into
                    approved families and to eventually remove all children from
                    institutions except the delinquent. At first treated with
                    scorn by the South Australian Government, the scheme was
                    encouraged when the institutions devoted to the handling of
                    troublesome boys became overcrowded. These two were also
                    appointed to the State Children's Council, which controlled
                    the Magill Reformatory. Catherine Helen Spence was also the
                    only female member of the Destitute Board.
                  </CardText>
                  <Subheader>Family History</Subheader>
                  <CardText>
                    Her father, David Spence, was elected first Town Clerk of
                    the City of Adelaide. David Spence (1790–1846) married Helen
                    Spence (née Brodie) (1791–1887). Their children were:
                    <List>
                      <ListItem>
                        Agnes (eldest daughter, Born 9 February 1818 – Died
                        ca.1835)
                      </ListItem>
                      <ListItem>Jessie (1821 – 21 November 1888)</ListItem>
                      <ListItem>
                        William Richard (13 December 1822 – 1903 New Zealand )
                      </ListItem>
                      <ListItem>John Brodie (1824 – 7 December 1902)</ListItem>
                      <ListItem>
                        Catherine Helen (31 October 1825 – 3 April 1910)
                      </ListItem>
                      <ListItem>David jnr. (1827–1890)</ListItem>
                      <ListItem>
                        Mary Brodie (ca.1830 – 22 November 1870)
                      </ListItem>
                      <ListItem />
                    </List>
                  </CardText>
                  <CardActions>
                    <FlatButton>
                      <a
                        href="http://www.gutenberg.org/files/4220/4220-h/4220-h.htm"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Autobiography by Catherine Helen Spence
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

Spence.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Spence);
