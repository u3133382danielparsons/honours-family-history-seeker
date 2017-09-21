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

class Vida extends Component {
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
                    title="Vida Goldstein"
                    subtitle="Feminist and Suffragist"
                  />
                  <CardText>
                    Vida Jane Mary Goldstein (1869-1949), feminist and
                    suffragist, was born on 13 April 1869 at Portland, Victoria,
                    eldest child of Jacob Robert Yannasch Goldstein and his wife
                    Isabella, née Hawkins. Jacob, born at Cork, Ireland, on 10
                    March 1839 of Polish, Jewish and Irish stock, arrived in
                    Victoria in 1858 and settled initially at Portland. He was
                    commissioned a lieutenant in the Victorian Garrison
                    Artillery in 1867 and rose to the rank of colonel. On 3 June
                    1868 he married Isabella (1849-1916), eldest daughter of
                    Scottish-born squatter Samuel Proudfoot Hawkins. After
                    living at Portland and Warrnambool, where Jacob ran a
                    general store, the Goldsteins moved to Melbourne in 1877.
                    There Jacob worked as a contract draughtsman. He was a
                    Unitarian, but the family attended Scots Church and later
                    the Australian Church where Dr Charles Strong encouraged a
                    deep involvement in social welfare work. A founding member
                    of the Melbourne Charity Organisation Society, its honorary
                    treasurer and later honorary secretary, Goldstein believed
                    that charity and poor relief should be scientifically
                    organized, not handed out indiscriminately. He was a member
                    of the Women's Hospital Committee for many years and also
                    helped to promote the Cheltenham Men's Home. With Strong, Dr
                    Llewelyn Bevan and others Goldstein assisted with the
                    project which began in 1892 for forming labour colonies,
                    notably at Leongatha. Described by some as irascible,
                    domineering and opinionated, he became estranged from his
                    feminist wife, although they lived under the same roof. He
                    died at their apartment in Bank Place in the city on 21
                    September 1910. Although an anti-suffragist, Jacob Goldstein
                    encouraged his daughters to be economically and
                    intellectually independent. Vida and her sisters were all
                    well educated by a private governess; from 1884 Vida
                    attended Presbyterian Ladies' College where she matriculated
                    in 1886. An attractive girl, always well dressed, she led,
                    for a time, a light-hearted social life. In 1892-98, when
                    the family income was affected by Melbourne's bank crashes,
                    she conducted with her sisters a co-educational preparatory
                    school in Alma Road, St Kilda. Of the four sisters, Lina in
                    1892 married a banker H. J. Henderson, son of Rev.William
                    Henderson; Elsie married Henry Hyde Champion in 1898; Aileen
                    and Vida did not marry, though Vida had many proposals.
                    Selwyn, their only brother, became a mining engineer. Vida's
                    mother was a confirmed suffragist, an ardent teetotaller and
                    a zealous worker for social reform. Vida's own public career
                    began about 1890 when she helped her mother collect
                    signatures for the huge Woman Suffrage Petition. In the
                    1890s she also became involved in the National Anti-Sweating
                    League, the Criminology Society and various social welfare
                    activities, particularly those promoted by Strong and by her
                    close friend Annette Bear-Crawford, with whom she helped to
                    organize the Queen Victoria Hospital Appeal for the Queen's
                    jubilee in 1897. She read widely on political, economic and
                    legislative subjects and attended Victorian parliamentary
                    sessions where she learned procedure while campaigning for a
                    wide variety of reformist legislation. In 1899 after the
                    death of Mrs Bear-Crawford, she was undisputed leader of the
                    radical women's movement in Victoria, and that year made her
                    first public-speaking appearance to advocate the vote for
                    woman. Trained initially by her friend, Vida quickly became
                    a remarkably capable and impressive speaker with the ability
                    to handle wittily even the most abusive of hecklers. Between
                    1899 and 1908 Vida's first priority was the suffrage. In
                    1902 she travelled to the United States of America to speak
                    at the International Woman Suffrage Conference, was elected
                    secretary, gave evidence in favour of woman suffrage to a
                    committee of the United States Congress and attended the
                    International Council of Women Conference. Australian women
                    had been granted the Federal vote in 1902 and on her return
                    from America she was one of four women who were the first in
                    the British Empire to be nominated and to stand for election
                    to a national parliament. In her first bid as an Independent
                    candidate for the Senate in 1903, she was proposed and
                    assisted by the Women's Federal Political Association. This
                    association had been formed to organize the women's vote for
                    the first Federal elections, but by July 1903 with Vida as
                    president it had become a vehicle for her platform and
                    opinions. Despite ridicule of her candidacy, at the December
                    election she polled 51,497 votes. Concluding after her
                    defeat that women needed greater organization, she began
                    educating female voters through the renamed Women's
                    Political Association (W.P.A.), through her paper the
                    Woman's Sphere which she owned and edited between September
                    1900 and March 1905, and by lecture tours around Victoria.
                    She also campaigned untiringly for the State suffrage. Once
                    the State franchise was won in 1908 Vida returned to
                    national politics and made four more attempts to gain
                    election to Federal parliament: in 1910 and 1917 for the
                    Senate and in 1913 and 1914 for the House of
                    Representatives, always as an Independent Woman Candidate.
                    She polled well except in 1917 when she lost her deposit,
                    partly because of her uncompromising position on pacifism
                    during the war. But there were other reasons for her
                    failures. Her rigidly independent status alienated party
                    supporters, and the press was either antagonistic to her,
                    misrepresented her or ignored her. Yet it is clear that Vida
                    was a candidate of sincerity and integrity. Her beliefs are
                    revealed in her election manifestos between 1903 and 1917.
                    Although they changed in detail, she consistently supported
                    the principles of compulsory arbitration and conciliation,
                    equal rights, equal pay, the appointment of women to a
                    variety of official posts, and the introduction of
                    legislation which would redistribute the country's wealth.
                    She was outspokenly opposed to capitalism, supporting
                    production for use not profit, and public control of public
                    utilities. She opposed the White Australia policy in
                    principle although she believed alien immigration should be
                    restricted until equal pay for equal work had been achieved.
                    Her desire to enter parliament and her avowed ambition to
                    become prime minister were based on her determination to put
                    her ideals into practice. Vida actively promoted women's
                    rights and emancipation in many other ways over the years
                    from 1891 to 1919. She helped to found or supported many
                    women's organizations including the National Council of
                    Women, the Victorian Women's Public Servants' Association
                    and the Women Writers' Club. She also worked for many social
                    reforms including equal property rights for man and wife and
                    raising the age of marriage and consent, while advocating
                    new laws on land taxation, food adulteration and the
                    sweating of women workers. Her methods included lobbying
                    politicians to urge amendments to proposed legislation; she
                    directly influenced many Acts. In December 1906, for
                    example, she had the satisfaction of seeing passed into law
                    her long-demanded Children's Court Act, the terms of which
                    she had helped to draft. In her article 'Socialism of
                    today—An Australian view' in the September 1907 issue of
                    Nineteenth Century and After, she included in cost-of-living
                    tables her findings on the lowest wage that a man and his
                    family needed to pay for the barest necessities; this
                    information, it is claimed, influenced Mr Justice Henry
                    Higgins in handing down his famous Harvester Judgment which
                    established the legislative concept of a basic wage. In
                    August 1909 Vida launched her second paper, the weekly Woman
                    Voter, of which she was owner-editor. Of the Australian
                    women connected with the emancipation and suffrage movements
                    of the day Vida Goldstein was the only one to gain a truly
                    international reputation. In February 1911 she visited
                    England at the invitation of the Women's Social and
                    Political Union and her speeches drew huge crowds. Alice
                    Henry wrote that Vida 'was the biggest thing that has
                    happened to the woman movement for some time in England'.
                    During World War I Vida was uncompromisingly pacifist. She
                    became chairman of the Peace Alliance, formed the Women's
                    Peace Army in 1915, and was involved in much valuable social
                    work including the organization of a women's unemployment
                    bureau in 1915-16 and a Women's Rural Industries Co. Ltd. In
                    1919, with Cecilia John, she accepted an invitation to
                    represent Australian women at a Women's Peace Conference in
                    Zurich: she was away three years. This trip signalled the
                    end of her active public involvement in Australian feminist
                    and political work: the Women's Political Association was
                    dissolved, the Woman Voter ceased publication and Vida
                    turned her attention increasingly to promoting more general
                    causes, particularly pacifism and an international
                    sisterhood of women. Throughout the inter-war years,
                    although no longer publicly prominent, Vida continued to
                    lobby for social reforms such as improved provision of birth
                    control and equal naturalization laws, and urged both women
                    and men to support disarmament and to oppose war. She was
                    now deeply committed to internationalism. Among the
                    recurrent themes in her writings were her visionary
                    suggestions for a new social order which was to have a
                    spiritual foundation and be based on the 'brotherhood of
                    man' concept of true socialism and on Christian ethics.
                    Indeed, although she had always refused to join a party,
                    Vida sympathized deeply with labour and the cause of working
                    peoples. Most press reports called her a socialist, but she
                    described herself as a democrat with a vision of society
                    which would enable the complete equality of women with men
                    and decent standards of living for all. She maintained her
                    belief that women had special talents and needs, were
                    potentially the world's civilizers, and therefore had
                    contributions to make to political and international
                    affairs. In later life, while realizing that people might
                    scoff at her 'simple faith in moral force' and her constant
                    promotion of spiritual solutions for national and world
                    problems, Vida became rather obsessive about the belief
                    which had once been her motivation—that 'Righteousness
                    exalteth a Nation'. In some disillusion, she became
                    increasingly involved in Christian Science as a practitioner
                    or healer, and at one time was a reader and president of its
                    church in Melbourne which she had helped to found. Vida and
                    her mother had first chosen to follow this religion about
                    1899. In her last years Vida lived quietly with her sisters
                    Elsie and Aileen, who was also a practitioner. Although Vida
                    Goldstein may appear to have been a visionary idealist, yet
                    by her pioneering efforts, her successes and her failures,
                    she was a trail-blazer who provided leadership and
                    inspiration to innumerable people. Vida summarized her basic
                    attitude to politics and public life as: 'In essentials
                    unity; in non-essentials liberty; in all things charity'.
                    She was humane, kind and sincere, genuinely concerned for
                    the underdog of whatever race or nationality. Charming,
                    public-spirited and believing in Christian principles which
                    she consistently practised, she was a born reformer, though
                    she promoted simple solutions to complex social problems.
                    According to a testimonial from her supporters, she 'offered
                    to the people the wit and eloquence of an orator, the
                    knowledge and foresight of a statesman, and the devotion and
                    courage of a brave woman'. She died of cancer at her home in
                    South Yarra on 15 August 1949 and was cremated. Her death
                    passed almost unnoticed. A portrait of her, painted by Phyl
                    Waterhouse from a photograph, is held by the National
                    Library of Australia, Canberra.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Australian Dictionary of Biography">
                      <a
                        href="http://adb.anu.edu.au/biography/goldstein-vida-jane-6418"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Goldstein, Vida Jane (1869–1949)
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

Vida.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Vida);
