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
import BryantTas from '../../../img/bryant/Tasmania2015.jpg';

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

class BryantBrothers extends Component {
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
                    <ListItem leftAvatar={<Avatar src={BryantTas} />} />
                  </List>
                  <CardTitle
                    title="A Tale of Four Brothers"
                    subtitle="The Bryant Brothers - W.S. Griffith"
                  />
                  <CardText>
                    THIS is the story of four Bryant brothers; George born 1789;
                    Francis 1795; James 1799 and Edmund 1803, who emigrated to
                    Van Diemen’s Land. They were sons of Matthew Bryant and Mary
                    Mills who were tenants of Curry Pool, a farm of some 390
                    acres in Charlinch and Spaxton parishes in Somerset from
                    1791. Matthew and Mary were married in Bridgwater in 1784
                    and the older four of their ten children were born there. He
                    died in 1815 and she about 1829. From that time George held
                    the lease of Curry Pool Farm. During the 1820’s a great many
                    respectable settlers arrived [in Van Diemen’s Land],
                    bringing the letters of recommendation from the Home
                    authorities which entitled them to land. Immigration of
                    persons with capital was encouraged by Lieut. Governor
                    Arthur, who saw immigration as the servant of
                    transportation. The convict system was based on assignment,
                    and men of capital were needed to maintain it. Land policy
                    in the 1820’s discriminated against the less wealthy
                    settler, as the size of land grants was proportional to the
                    amount of capital held. The need for recommend- ation to the
                    Governor and the high cost of travel to Van Diemen’s Land
                    also discouraged the poorer person.1 Of the brothers, James
                    and Edmund, both bachelors, went first. They wrote jointly,
                    from Guild Hall Coffee Shop, London, to Earl Bathurst on 25
                    April 1823, soliciting a land grant in Tasmania. Their
                    letter of recommendation to Lieutenant Governor Sorell was
                    dated 30 April 1823. They sailed in the ship Aguilar, 432
                    tons, and arrived in Hobart on 4 February 1824. After
                    arrival in Hobart with about £1,000 capital each, James and
                    Edmund Bryant took up land near Jericho. This is about
                    seventy kilometres by road north of Hobart. Even forty years
                    later it was fairly wild country. James was granted 800
                    acres and Edmund 700. Afterwards they were to receive
                    further grants of 700 and 800 acres on account of additional
                    stock imported. Lengthy sea voyages or a lonely life in the
                    bush are good for romance. In October 1824 in Hobart, James
                    Bryant married Ann Roe, the widow of Thomas Roe, another
                    passenger on the Aguilar who had died on the voyage.
                    Meanwhile, Edmund had departed again for England in the brig
                    Woodlark, 196 tons, on 4 April 1824. There he married Jane
                    Mogg by licence on 15 February 1825 at St Mary’s Church,
                    Bridgwater. They were to have seven children. Edmund arrived
                    back in Hobart in the brig Mountaineer on 24 October 1825,
                    with his bride, and Francis Bryant, with his wife and five
                    children. They brought pure-bred sheep and cattle and a two-
                    year-old thoroughbred stallion as well as goods for sale.
                    Francis had married Jane Carver about 1815. They were to
                    have a further six children in Tasmania. The brothers did
                    much jointly and had a store in Hobart which was also a
                    butchery at one stage. They imported pure-bred sheep and
                    cattle and ran stock on their various properties. It seems
                    James and Edmund ran their properties at Jericho jointly.
                    However, before James died on 27 January 1833, Edmund had
                    leased ‘Trafalgar’ at Evandale and was in occupation by
                    October 1831. He was to run other properties later. Francis
                    Bryant received, with William Nicholls, a grant of 1,118
                    acres in Bandon Parish in 1826 and 700 acres in Newark
                    Parish in 1827. He also was to own or lease other properties
                    later. As Edmund Bryant imported the first thoroughbred
                    stallion, Viscount, it seems likely that the brothers were
                    much involved in racing. In spite of Governor Arthur’s dis-
                    approval, there had been a day of horse racing on the
                    Fourteen Tree Plain, Jericho as far back as 3rd April, 1826.
                    The day following these races a meeting was held at Jericho
                    at which it was unanimously decided to form a Turf Club with
                    a limit of fifty members. This was the foundation of the
                    Tasmanian Turf Club and was the first club in V.D.L. to use
                    the word “Tasmanian”.2 Meanwhile, back in England George
                    still held the lease of Curry Pool when the property was
                    sold in October 1833 and he was 44. Although the lease at a
                    rent of £520 a year was for 14 or 21 years from Michaelmas
                    1831, George and his family sailed to join his brothers in
                    Van Diemen’s Land aboard the Sarah, a ship of 488 tons. She
                    sailed from London on 14 October 1834 and arrived in Hobart
                    on 14 February 1835. George Bryant had married Ann Legg in
                    Bristol in 1811 and they had ten children between 1812 and
                    1833. It would appear that George and his family lived with
                    his brother Francis at ‘Redlands’, Plenty, for some years
                    after arrival in Van Diemen’s Land, probably until Francis
                    left ‘Redlands’ on expiration of the lease at the end of
                    1841. George died in Hobart on 8 November 1853. His wife Ann
                    Legg seems to have gone to live with her son James in
                    Victoria soon after. She died on 7 December 1867 aged 77, at
                    his property, Frogmoor Farm, Yarram Creek. As early as 1836
                    E. and F. Bryant, with John Atkin, had shipped 1,000 sheep
                    to Port Phillip, where Atkin had them at Salt Water River,
                    twenty miles from what became Melbourne. Edmund and Francis
                    were signatories that year of a Memorial from settlers at
                    Port Phillip to Governor Sir Richard Bourke, requesting the
                    same consideration in respect to land grants as the Port
                    Phillip Association, which wanted a monopoly. Both Edmund
                    and Francis made several crossings of Bass Strait in the
                    next ten years. In 1845, Edmund and his family were living
                    at ‘Kingston’ near Ben Lomond, their property of 5,000 acres
                    thirty miles from Launceston. T. Thorpe reported to the
                    police magistrate, Fingal, on 22 March 1845: About 8 o’clock
                    this evening two armed men (Priest and Smith) went to Mr.
                    Bryant’s hut near Ben Lomond. The bushranger presented their
                    pieces and ordered them to remain quiet. One of them tied
                    the men whilst the other stood sentry (there were eight men
                    in the hut). They then marched the men up to the house and
                    opened the parlour door and ordered Mr. Bryant and his
                    family into the kitchen—they demanded the key of the stores
                    which was given to them by Mr. W. Bryant [16 year old son].
                    One remained sentry over the whole of them while the other
                    plundered the stores of the following food stuffs, viz. a
                    quantity of tea and sugar, tobacco, flour, two new hats, a
                    topcoat (black pitch cloth), a double barrel gun
                    (percussion), one pair blankets, one pair of white fustian
                    trousers and two white shirts, etc., which they packed up in
                    their knapsacks and after drinking two glasses of ale they
                    ... [left], cautioning Mr. Bryant and his servants not to
                    report them for an hour and a half.3 It was late in 1845
                    that Edmund Bryant moved to the Port Phillip District with
                    his family. They sailed from Launceston in Tamar on 25
                    October 1845 and arrived in Melbourne on 31st of that month.
                    He was first at ‘Charlotte Plains’ station with H. N. Simson
                    (who later married his daughter Janet) before acquiring
                    ‘Cairn Curran’ in 1848. It was there that he died on 21
                    April 1849. His wife, Jane Mogg, survived him, all her sons
                    and her eldest daughter. From 1870, she lived at Hamilton
                    House, Lennox Street, Richmond, Melbourne, where she died on
                    28 December 1893. On 20 August 1845, Francis offered 2,186
                    acres at Jerusalem for lease. It is not clear when Francis
                    and his family left Tasmania for Victoria but it may well
                    have been about this time. By daughter Eliza’s account, they
                    certainly were living in Melbourne, in 1850/51. The
                    Victorian Electoral Rolls for 1856/57 show Francis Bryant,
                    Gentleman, at 27 La Trobe Street, Melbourne. His wife, Jane
                    Carver, died on 15 March 1857 at Victoria Street, Melbourne,
                    aged 65. Francis Bryant of Spaxton Cottage, South Yarra,
                    Melbourne, born Charlinch, Som- erset, late of Surrey,
                    gentleman aged 63, married Lucy Matilda (neé Marzetti), aged
                    38, widow of George John Marzetti on 9 March 1859 at Christ
                    Church, South Yarra. A Marzetti family was prominent in the
                    New Norfolk area in Tasmania. Francis Bryant died in London,
                    England, on 29 January 1863. These brothers from Somerset
                    were well known for improving the quality of stock in
                    Tasmania in difficult pioneering days.
                  </CardText>
                  <CardActions>
                    <FlatButton label="tasfhs.org">
                      <a
                        href="http://www.tasfhs.org/Volume%2019.pdf"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        A Tale of Four Brothers
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

BryantBrothers.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BryantBrothers);
