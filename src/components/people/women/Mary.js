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

class Mary extends Component {
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
                  <CardTitle title="Mary Lee" subtitle="Who was Mary Lee?" />
                  <CardText>
                    Who was she? Where did she come from? Why did she come here?
                    The answers to these and many other questions have had to be
                    ferreted out from newspapers and government records, for
                    there are very few of Mary Lee's own papers available. Where
                    did her papers go? Did she keep diaries? Did the recipients
                    of the hundreds of letters she wrote file them away, and
                    will they come to light? (If you have any information
                    relating to Mary Lee and her family please forward details
                    to the Mortlock Library).Three private letters and part of a
                    fourth, and a photo have recently been sent to the Mortlock
                    Library of South Australiana, so perhaps in time we will
                    know more of her as a private person and fill the gaps in
                    the jigsaw of information about her. We know, from her
                    Obituary, that she was born in Ireland, on 14 February 1821
                    to ‘the wife of' John Walsh, at Kilknock Estate, county
                    Monaghan, where her father was the Master of the Orange
                    Lodge. She married in 1844 and had seven children. Of her
                    children we know of three, they were (John) Benjamin, a
                    clerk, who came to Adelaide, Charles who lived in Liverpool
                    in England and a daughter Evelyn who came with Mary to
                    Adelaide and worked in the South Australian Telegraph
                    Department. Mary Lee was a widow when she arrived in 1879
                    and her death certificate names her husband as ‘George'. Her
                    obituaries say he was ‘organist and vicar choral at Armagh
                    Cathedral' in Ireland. However letters from the Dean of
                    Armagh state that the records show no ‘George' but only a
                    ‘James Lee'. James was however the father of Mary's nephew,
                    David Lee , Town Hall organist for many years in Melbourne,
                    making James Mary's brother-in-law. So we are left with a
                    mystery about Mary Lee's husband and her life before 1879.
                    When Mary Lee's son Ben, already living in Adelaide, became
                    ill she and Evelyn (then aged 19) sailed from England on the
                    steamship "Orient" on its maiden voyage. They left on 3
                    November 1879 and arrived in Adelaide on Monday 15 December
                    to a hot (32 ) summer day. The papers of the day remarked on
                    the speedy passage that this wonder ship had made, 37 days
                    22 hours from England instead of the usual 70 days! Mary's
                    first year in Adelaide brought sadness. Her son, whose full
                    name was John Benjamin Stedham Lee, died on 2 November,
                    1880. He was buried in the Smith Street cemetery in
                    Walkerville. Mary and Evelyn lived in North Adelaide at 152
                    Barnard Street until some time around 1900 when they moved
                    to 124 Molesworth Street. By September 1903 they had moved
                    again to 83 Gover Street where Mary died in her eighty-ninth
                    year on 18 September 1909. She was buried in the same grave
                    as Ben and her tombstone a small white marble scroll records
                    her work as the ‘Late Hon. Sec. Women's Suffrage League of
                    S. A.'We know little of Mary's personal life or friends but
                    she had a circle of colleagues with whom she worked for a
                    wide variety of causes. Mary was, by this time, over 60, but
                    strong, and it seems that she was healthy, lively and
                    forever busy. Her motto in life could have been the phrase
                    she used in one of her articles:- "Let us be up and doing."
                    She is described as short and plump. She wore her dark hair
                    piled elegantly high on her head. In photos it seems that
                    she dressed mostly in dark colours which would have been
                    appropriate according to Victorian etiquette for she was a
                    widow and her son had died. The latest photo of Mary to have
                    come to light (above) was taken in the garden at 152 Barnard
                    Street and she seems a very tiny figure. It was from this
                    address that the only private writing of Mary Lee that we
                    have came. In a lively letter written on Boxing Day 1895 to
                    a Mr. Dawes, she writes enthusiastically of his wife and
                    daughter who have come to stay while Mrs. Dawes awaits the
                    birth of their second child. Their first child was Evelyn
                    Dawes about whom Mary writes with great affection. Another
                    letter sent in January of 1896 tells more of the family
                    circle and Mary quotes Emerson, whom she says is her
                    favourite author. The third letter, this time to Mrs. Dawes,
                    from April 1897, offers sympathy for a loss in her family,
                    tells of the first Federation Convention meeting in Adelaide
                    and the visit of the Premier to London for the Jubilee of
                    Queen Victoria, "I should like to be in dear old London on
                    that day - what a proud day for our dear old Queen." Towards
                    the end of the letter we see Mary Lee as she appears in no
                    other papers, the warm human woman who, with Evelyn her only
                    family nearby, writes, "Kiss the darling wee ones for
                    grannie & write soon and tell me all about them." During the
                    late 1880s and early '90s the colony of South Australia was
                    enduring both natural and economic misfortunes. There was a
                    great drought, wheat and wool prices were down world wide
                    and there were strikes and lockouts. The unemployment rate
                    soared, there was no dole or relief, the banks were unstable
                    and some of them collapsed. Poverty caused great hardship
                    and misery and it was largely for the relief of this poverty
                    that Mary and her colleagues worked. Mary Lee spent her time
                    and energy in many activities that sought to bring about an
                    improvement in the lives of women and children. She
                    commented in detail in her writing on the plight of the
                    least advantaged in the society. Alas! For the pinched and
                    oppressed, the toiling, the struggling, suffering sorely
                    tried and sorely tempted masses. She saw quite clearly the
                    links between poverty and the powerless position of women
                    and believed that if they had the vote they would be able to
                    alter society for the better. Could women have ever
                    descended to such depths of misery and degradation if women
                    had a voice in making the laws for women? Let us be up and
                    doing. Let every woman who can influence an elector see that
                    he seizes his vote as a sledgehammer. and goes to the poll
                    resolved to dash from its pedestal of authority this hoary
                    injustice to womanhood... (Letter to Women 14 April 1890)
                    Mary was guided by a strong set of values based on Christian
                    principles and she lived and practised her beliefs. Most
                    thoughtful women, while holding home is woman's sweetest
                    sphere, are yet happy in believing that however and wherever
                    woman can be of best and wisest usefulness to her fellow men
                    and women there, by God's providence, is her allotted
                    sphere; and whatever are her best gifts of wealth or
                    influence - of head or hand-these are the indicators, as
                    they are the instruments, of the work which God expects of
                    her. (Letter to Women 14 April 1890) It is likely that Mary
                    Lee was a regular church goer, possibly attending the
                    Primitive Methodist Church in nearby Wellington Square, in
                    North Adelaide. In those days most people did attend church
                    or chapel regularly and often went to hear particular
                    preachers deliver their sermons. From her letters to the
                    newspapers and her articles on Women's Suffrage we see that
                    she was well educated and widely read, and if you read her
                    letters, speeches and articles aloud you'll hear there the
                    echoes of the powerful and charismatic speaker that she must
                    have been. "Fair play is a jewel." I think I am right in
                    saying that there is no jewel which Britishers as a whole
                    prize more dearly, and yet, while men contend for it
                    themselves, they leave their women out. "The woman's cause
                    is man's. They rise or sink together, dwarfed or god-like,
                    bond or free." You place her beside the felon, outside the
                    pale of citizenship. She has no vote. You tax her to support
                    a Government which she has no voice in choosing or
                    rejecting. She and her children must submit to the laws they
                    make, Is this fair play? She "knew the value of publicity to
                    awaken public interest and understanding" , believed in what
                    she did quite fiercely and was quick- tempered too. One of
                    her opponents, in a letter signed ‘Respice Finem', (Latin:
                    Look to the end) quoted many passages from the Bible,
                    including St. Paul's thoughts on women covering their heads
                    and being silent in church. Her letter in response shows her
                    exasperation at such irrelevant arguments. Will he hold up
                    his hands in holy horror if I tell him that though St.
                    Paul's learning is unquestioned, and his inspired doctrine
                    unassailable, his social rules are decidedly behind the age!
                    Who cares whether I had my bonnet on or off while I spoke on
                    Friday? Where was the ‘shame' if my hair were long or short
                    any more than if it were black or brown or grey? She was
                    often outspoken, not hesitating to call people fools if they
                    were foolish and she called William Blacker MP ‘an idiot'
                    and in a satirical article it is reported that she told the
                    Labor Party members they were a lot of ‘nincompoops'. Many
                    people disapproved of, or were upset by, her behaviour but
                    Mary continued the work that she had chosen, not backing
                    down for anyone. A lot of people opposed the reforms and
                    changes that she worked for and they attacked her, as well
                    as the reforms, in the Letters to the Editor columns in the
                    daily papers. Attacks came from women as well as men. Lucy
                    Green wrote. Sir: I have read most of the letters appearing
                    in your columns under the name "Mary Lee" and must say that
                    which appears in the Evening Journal contains more rubbish
                    and silly rigmarole than any I have hitherto seen. She
                    commences as usual with a tirade against that dreadful
                    creature "man" and says he cannot think as woman. I am very
                    thankful he is unable to do so and "Mary Lee" would be of
                    the same opinion, I feel sure, if she would only devote more
                    of her time to the study of ancient and modern political
                    history and less time to scribbling upon matters of which
                    she has not grasped the rudiments." ... "the funny part of
                    the whole matter is this woman is agitating the woman's
                    suffrage question with the evident intent of getting women
                    to sit in parliament. In one of her earlier letters Mary Lee
                    told readers that she would fight until she died for the
                    cause of Women's Suffrage and if she died before the right
                    to vote was won the words ‘"Women's enfranchisement" shall
                    be found engraved upon my heart.' Many people were made
                    uneasy by the fierce passion of the suffragists for equality
                    and the rights of women. These were the days when few women
                    spoke in public, although some, like Serena Lake had begun
                    to preach and Catherine Helen Spence spoke on social reforms
                    and effective voting. Women such as Mary Lee who not only
                    addressed meetings held in drawing rooms but spoke in public
                    halls and clubs were often a target for insult and ridicule.
                    One of Mary's opponents, C. H. Hussey M.P. wrote in a letter
                    to the Editor of the Adelaide Observer, Poor Mary Lee! How
                    she does froth and foam and stew and scold. I wonder if she
                    manages her household in the same feverish style." ... "Let
                    Mary Lee follow the example of many of her sex who are too
                    modest to wrangle publicly in the Press and on the platform
                    on questions of political expediency.... However, Mary Lee
                    was not put off by such responses and a report of her talks
                    throughout the northern areas of the colony in 1894 shows
                    that she continued to state her opinions in a very
                    forthright manner. "Mrs. Lee urges that in claiming to be a
                    Democracy, we misuse the term, and though our colony is over
                    50 years old, we have not mastered the ABC of our political
                    vocabulary, the real meaning of the term being "A government
                    of the people, for the people, by the people;" and as ours
                    is practically a government of men, for the men, by the men
                    - who are numerically not one half the people, we cannot in
                    any sense claim to be a Democracy. Women were regarded still
                    as the ‘property' of their husbands, and their ‘place' was
                    seen as being exclusively in the home. There were few
                    opportunities to work outside the household, except as a
                    domestic servant in someone else's house. New kinds of work
                    opening up in schools and government offices required
                    education. Compulsory education had been introduced only in
                    1875, with secondary education becoming available for some
                    young women only after 1879. Mary saw this education as the
                    chance for the current generation to improve their lives and
                    become politically aware and she warned the politicians, in
                    a deputation to the government, that education had: "placed
                    in their hands the keys to all knowledge"..."that they (the
                    government) might as well attempt to fling a lasso over the
                    neck of a whirlwind as to attempt to arrest the forces in
                    this colony; the education of the people had been set in
                    motion." Her interest in education in all forms continued
                    and she had a particular interest in the idea of equality of
                    education for girls. In 1889, in a spirited letter to the
                    Register Mary, as the Hon. Sec. of the Queen's Home for
                    Domestic Instruction states that together with Rose Birks
                    she and a group of women had worked and lobbied for more
                    than two years to set up a Home for Domestic Instruction and
                    reminded the Government of its obligations to the young
                    women of the colony. "It is hoped the Government will see
                    the justice and expediency of granting, as in the case of
                    the boys, the necessary premises, and conceding a subsidy in
                    a measure proportionate to that granted in support of the
                    technical schools for boys." As a widow Mary Lee was free to
                    choose to live her life the way she wanted and to do what
                    she believed needed to be done. She did not have to ‘mind'
                    what her husband said or ensure his happiness and comfort
                    above all else, as many other married women did. She signed
                    the letters to the paper and pamphlets that she wrote with
                    her own name, never needing to take cover behind a pen name
                    as many of her supporters and opponents did. One other very
                    regular contributor in support of the Suffrage and other
                    social reforms in the Register's Letters to the Editor
                    column signed herself "Zenobia" throughout the whole
                    campaign. Her identity remains a mystery though historians
                    think that this may have been the pen name of Rose Birks
                    (who in the manner of the day was usually referred to as
                    Mrs. Charles Birks, being identified via her husband's
                    name).
                  </CardText>
                  <CardActions>
                    <FlatButton label="State Library of South Australia">
                      <a
                        href="http://www.slsa.sa.gov.au/marylee/ml02.htm"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Who was Mary Lee?
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

Mary.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Mary);
