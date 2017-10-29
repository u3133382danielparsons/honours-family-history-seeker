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

class BanjoPaterson extends Component {
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
                  <CardTitle title="Banjo Paterson" subtitle="A Bush Poet!" />
                  <CardText>
                    Andrew Barton Paterson was born in 1864 on his family
                    property Narrambla, near the small country town of Orange,
                    New South Wales. There is no doubt that this is where his
                    love for the Australian bush first started. His parents were
                    Andrew Bogle Paterson, who had immigrated from Lanarkshire,
                    Scotland and Rose Isabella Barton. His mother was related to
                    the future first Prime Minister of Australia Edmund Barton.
                    The Paterson family lived on Buckinbah Station near Yeoval
                    NSW until Andrew Paterson snr took over the farm in
                    Illalong, near Yass, when his brother died. The farm was
                    close to the dusty road between Melbourne and Sydney. For
                    Banjo, the sights he saw every day would have fueled his
                    imagination; the gold escorts on the way to the banks laden
                    with gold, the Cobb and Co coaches taking passengers to far
                    away places like Melbourne and Sydney, drovers with their
                    cattle, Swagman boiling the billy for tea at a bush camp,
                    bushrangers passing through, bullock teams that carried food
                    and supplies to the remote country areas, and the horsemen
                    from the Murrumbidgee River and Snowy Mountains country who
                    could ride horses like no one else in young Banjo's life.
                    Banjo was 7 years old when his family moved to the farm. For
                    a impressionable young boy, this must have been a great
                    childhood. Growing up in the bush, he had a great fondness
                    for horses and you would image this was a inspiration for
                    his ballads about horses later in life. All the Paterson
                    children were taught by a governess. But, once they could
                    ride, Banjo and his siblings went to the bush school at
                    Binalong where he stayed until he was 10 years old. In 1874
                    he attended the Sydney Grammar School. He stayed with his
                    Grandmother in Sydney and returned to his family and the
                    farm on school holidays. Growing up in country New South
                    Wales and moving to Sydney after finishing school, I know
                    how different these two worlds must of been for a very young
                    boy. Banjo never lost his love of the bush, as his writings
                    in later life showed. In 1875 he shared the junior Knox
                    prize with Sir George Rich, and left at age 16. He was
                    admitted as a solicitor on 28 August 1886. He practiced in
                    partnership with John William Street for ten years. It was
                    during these years, he began publishing verse in the
                    Bulletin and Sydney Mail under the name "B and The Banjo."
                    He used "The Banjo," because his favourite horse owed by his
                    family was called Banjo. In 1895 Banjo Paterson wrote his
                    famous ballad Waltzing Matilda. You have to wonder if
                    Waltzing Matilda was written because of those swagman that
                    Banjo saw sitting around a camp fire waiting for the billy
                    to boil when he was a young boy. His first book The Man from
                    Snowy River and other verses sold out its first edition
                    within a week, and another four editions in six months. The
                    book was just as well received in England, as in Australia.
                    At the time, The Times compared Banjo Paterson with Rudyard
                    Kipling, who was the only other poet ahead of Banjo Paterson
                    in popularity of living poets who wrote in English. In 1899
                    during the Boer War, Banjo Paterson traveled to South Africa
                    as special war correspondent for The Sydney Morning Herald.
                    Attached to General French's column, for nine months, Banjo
                    Paterson was in the middle of the fighting and his accounts
                    of campaigns included the surrender of Bloemfontein, the
                    capture of Pretoria and the relief of Kimberley. Banjo met
                    Rudyard Kipling when he attended a dinner in Bloemfontein.
                    Because of his reporting in South Africa he was noticed by
                    the English press. He was appointed as a correspondent for
                    the international news agency Reuters. After the war he
                    wrote ballads about his experiences, Johnny Boer and With
                    French to Kimberley are the best known. He wrote twelve
                    ballads in all. Banjo Paterson returned to Australia in
                    September 1900, but did not stay long. He was sent to China
                    in July 1901 as a correspondent for the Sydney Morning
                    Herald. He then went on to England to meet his friend Phil
                    May who was a cartoonist he had worked with on the Bulletin,
                    and also caught up with Rudyard Kipling whom he had met in
                    South Africa and was a guest at his Sussex home. In 1902
                    when he returned to Australia, Banjo Paterson published
                    another collection, Rio Grande's Last Race and Other Verses.
                    In 1903 he left his legal practice and he was appointed
                    editor of the Sydney Evening News. Banjo Paterson married
                    Alice Emily Walker on 8 April 1903, who was from Tenterfield
                    Station. They were married in St. Stephen's Presbyterian
                    Church, in Tenterfield, New South Wales. Banjo and Alice
                    Paterson had two children, Grace and Hugh. In 1905 Banjo
                    Paterson published a collection of ballads entitled Old Bush
                    Songs. During World War I Banjo Paterson left for Europe as
                    a war correspondent. Instead, he was attached as an
                    ambulance driver to the Australian Voluntary Hospital in
                    France and was commissioned to the 2nd Remount Unit of the
                    AIF. He was promoted to Captain, then served in the Middle
                    East. He was wounded in April 1916 and when he rejoined his
                    unit he was promoted to Major. He returned to Australia in
                    1919. In 1917 Angus & Robertson had published a further
                    collection of his poems, Saltbush Bill, J.P., and Other
                    Verses, Three Elephant Power, and Other Stories, heavily
                    edited by A. W. Jose, to whom Robertson confided, "It is
                    amazing that a prince of raconteurs like Banjo should be
                    such a messer with the pen." Banjo Paterson returned to
                    journalism after the war and worked for The Sydney Mail and
                    Smith's Weekly. In 1922, he became editor of a racing
                    journal and The Sydney Sportsman. In 1923, sixty of Banjo's
                    poems were printed in Collected Verse, which has been
                    reprinted many times over the decades. He retired from
                    journalism in 1930. He was well known around the Sydney area
                    and he spent a lot of his time at the Australian Club where
                    his portrait now hangs. In later years he became a
                    successful broadcaster with the Australian Broadcasting
                    Commission. Banjo also wrote his book of children's poems,
                    The Animals Noah Forgot 1933. It was in Happy Dispatches
                    1934 that he described his meetings with the famous, people
                    like Rudyard Kipling, Sir Winston Churchill, George Ernest
                    Morrison, Lady Dudley and British army leaders. He published
                    another novel, The Shearer's Colt 1936, and in 1939 wrote
                    for the Sydney Morning Herald. That year he was appointed
                    C.B.E. Banjo Paterson died of a heart attack in Sydney on 5
                    February 1941 aged 76.Banjo Paterson's memorial is at the
                    Northern Suburbs Memorial Gardens and Crematorium, Sydney.
                  </CardText>
                  <CardActions>
                    <FlatButton label="wikitree.com">
                      <a
                        href="https://www.wikitree.com/wiki/Paterson-1121"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        The Man From Snowy River
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

BanjoPaterson.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BanjoPaterson);
