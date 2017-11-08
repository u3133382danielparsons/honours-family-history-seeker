import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardMedia,
  CardTitle,
  CardActions
} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

// Images from 'src/img'
import McCraeAv from '../../components/people/img/georgiana.jpg';
import McCraeAuthurs from '../../img/McCrae/GeorgianaMcCraeArthursSeat1846ca.jpg';
import GordonFifth from '../../img/McCrae/GeorgeFifth.jpg';
import MotherMcCrae from '../../img/McCrae/motherMcCrae.jpg';
import GordonFourth from '../../img/McCrae/fourthGordon.jpg';
import JaneGordon from '../../img/McCrae/janeGordon.jpg';
import Duchess from '../../img/McCrae/duchess.jpg';
import Eliza from '../../img/McCrae/eliza.jpg';
import Charles from '../../img/McCrae/charles.jpg';
import Bathurst from '../../img/McCrae/Bathurst.jpg';
import CharlesGordon from '../../img/McCrae/charlesGordon.jpg';
import grayFamily from '../../img/gray/grayFamily.jpg';
import grayAv from '../../img/gray/grayAv.jpg';
import grayArticle from '../../img/gray/grayArtP1.png';
import scarlettAv from '../../img/scarlett/scarlettAv.jpg';
import scarlettArticle from '../../img/scarlett/scarlettArticle.png';
import scarlettFamily from '../../img/scarlett/scarlettFamily.jpg';
import bryantTas from '../../img/bryant/Tasmania2015.jpg';
import hobartLand from '../../img/bryant/hobartLand.jpg';
import patersonAv from '../../img/paterson/hat.jpg';
import manSnowyRiver from '../../img/paterson/manfromsnowyriver.png';
import Banjo from '../../img/paterson/banjo.png';
import theAge from '../../img/paterson/theAge.png';
import Eminent from '../../img/paterson/eminent.png';
import Poet from '../../img/paterson/poet.png';
import Man from '../../img/paterson/man.png';
import Immediate from '../../img/paterson/immediate.png';
import Busy from '../../img/paterson/busy.png';
import Volume from '../../img/paterson/volume.png';
import Remainder from '../../img/paterson/remainder.png';
import York from '../../img/paterson/york.png';
import Wind from '../../img/paterson/wind.png';
import Clancy from '../../img/paterson/Clancy.png';
import Three from '../../img/paterson/three.png';
import HollingworthAv from '../../img/hollingworth/HollingworthAv.jpg';
import Sawmill from '../../img/hollingworth/sawmill.jpg';
import JohnSpenceAv from '../../img/spence/John-Brodie-Spence.jpg';
import CatherineSpence from '../../img/spence/Catherine-Spence.jpg';
import HighPriestess from '../../img/spence/high-priestess.png';
import ChinnAv from '../../components/people/img/ChinHockUnidentifiable.jpg';
import ChinnFamily from '../../img/chinn.jpg';
import CordatoFamily from '../../img/cordato/Casino1914.jpg';
import ChambirasFamily from '../../img/cordato/Chambiras.jpg';
import CordatoAv from '../../img/cordato/kyriakos.jpg';
import AnthiAv from '../../img/cordato/anthi.jpg';
import AnthonyAv from '../../img/cordato/anthony.jpg';
import ManuelAv from '../../img/cordato/manuel.jpg';
import JimAv from '../../img/cordato/jim.jpg';

class HomeMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Bryant Family"
                subtitle="Van Diemen's Land"
                avatar={bryantTas}
              />
              <CardMedia
                overlay={<CardTitle title="" subtitle="Tasmania 1820s" />}
              >
                <img src={hobartLand} alt="The Bryant Family" />
              </CardMedia>
              <CardTitle
                title=""
                subtitle=" From Somerset England (1820), to Van Diemen's Land"
              />
              <CardText>
                This is the story of four Bryant brothers; George born 1789;
                Francis 1795; James 1799 and Edmund 1803, who emigrated to Van
                Diemen’s Land. They were sons of Matthew Bryant and Mary Mills
                who were tenants of Curry Pool, a farm of some 390 acres in
                Charlinch and Spaxton parishes in Somerset from 1791. Matthew
                and Mary were married in Bridgwater in 1784 and the older four
                of their ten children were born there. He died in 1815 and she
                about 1829. From that time George held the lease of Curry Pool
                Farm.
              </CardText>
              <CardText>
                During the 1820’s a great many respectable settlers arrived in
                Van Diemen’s Land], bringing the letters of recommendation from
                the Home authorities which entitled them to land. Immigration of
                persons with capital was encouraged by Lieut. Governor Arthur,
                who saw immigration as the servant of transportation. The
                convict system was based on assignment, and men of capital were
                needed to maintain it. Land policy in the 1820’s discriminated
                against the less wealthy settler, as the size of land grants was
                proportional to the amount of capital held. The need for
                recommend- ation to the Governor and the high cost of travel to
                Van Diemen’s Land also discouraged the poorer person.
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="Tasmanian Ancestory p.8.">
                      <a
                        href="http://www.tasfhs.org/Volume%2019.pdf"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="A TALE OF FOUR BROTHERS"
                      >
                        A TALE OF FOUR BROTHERS
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="Edmund Bryant">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/8790805?browse=ndp%3Abrowse%2Ftitle%2FH%2Ftitle%2F22%2F1825%2F10%2F29%2Fpage%2F679705%2Farticle%2F8790805"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt=" Hobart Town Gazette, Sat 29 Oct 1825  Page 2"
                      >
                        SHIPPING INTELLIGENCE
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Kum Mow Chinn"
                subtitle="Chinese Australian Family"
                avatar={ChinnAv}
              />
              <CardMedia
                overlay={
                  <CardTitle
                    title=""
                    subtitle="Wedding of Elsie May Chinn and Kum Mow - Sydney, 1917"
                  />
                }
              >
                <img src={ChinnFamily} alt="The Kum Mow Chinn Family" />
              </CardMedia>
              <CardTitle
                title="Chinese Wedding in Sydney"
                subtitle="The Kum Mow Chinn Family"
              />
              <CardText>
                For the greater part of last week the Chinese community of
                Sydney were having a royal time, the occasion being a marriage
                celebrated in both European and Chinese fashions. Money was not
                spared to make the event a memorable one, and many novel customs
                incidental to a Chinese wedding were witnessed for the first
                time by a few privelaged Europeans.
              </CardText>
              <CardText>
                The contracting parties were Mr. Kum Mow, one of the leading
                Chinese business men of Bathurst, and Miss Elsie May Chinn, of
                Junee. The European part of the ceremony took place at Christ
                Church, the Rev, J. Hope officiating. The bride wore a handsome
                dress of crepe de chine, pearl trimmings and duchesse lace. She
                was accompanied by Misses Mabel Pen, Daisy Genelck, and Doreen
                Sing; all of whom wore pale pink crepe de chine over linen and
                Chantilly lace, with tulle hats to match.
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="Chinese Wedding in Sydney">
                      <a
                        href="http://www.tasfhs.org/Volume%2019.pdf"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="The Tiger's Mouth"
                      >
                        Wedding of Elsie May Chinn and Kum Mow
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="Chinese Wedding In Sydney">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/221962375?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F1180%2F1917%2F02%2F18%2Fpage%2F24413712%2Farticle%2F221962375"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt=" The Sun (Sydney, NSW : 1910 - 1954) Sun 18 Feb 1917 Page 16"
                      >
                        CHINESE WEDDING IN SYDNEY.
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="The Gray Family"
                subtitle="Montecollum, Mullumbibmy, Milla Milla, Burringbar, and Sydney."
                avatar={grayAv}
              />
              <CardMedia
                overlay={
                  <CardTitle
                    title=""
                    subtitle="Milton Samios behind soda fountain at left and probably Alex on the right (Courtesy Jim Samios)"
                  />
                }
              >
                <img
                  src={grayFamily}
                  alt="Milton Samios behind soda fountain at left and probably Alex on the right (Courtesy Jim Samios)"
                />
              </CardMedia>
              <CardTitle
                title=""
                subtitle="Tweed Daily (Murwillumbah, NSW : 1914 - 1949). Montecollum,
                 and Burringbar."
              />
              <CardText>
                <img
                  src={grayArticle}
                  alt="First half of Article on Gray Family"
                />
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="Trove">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/190722784?browse=ndp%3Abrowse%2Ftitle%2FT%2Ftitle%2F1007%2F1922%2F02%2F08%2Fpage%2F21492780%2Farticle%2F190722784"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="From Trove. The Tweed Daily, Mullimbimby, Feburary 8, 1922."
                      >
                        Mullimbimby - The Gray Family
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="Ancestory">
                      <a
                        href="http://freepages.history.rootsweb.ancestry.com/~aliens/chapter_2.htm"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="ALIENS OF THE TWEED AND BRUNSWICK"
                      >
                        ALIENS OF THE TWEED AND BRUNSWICK
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Sir James Scarlett"
                subtitle="James Scarlett, 1st Baron Abinger, (13 December 1769 – 17 April 1844)"
                avatar={scarlettAv}
              />

              <CardMedia
                overlay={
                  <CardTitle
                    title="The Scarlett Family"
                    subtitle="Raymond Married Josephine in 1917"
                  />
                }
              >
                <img src={scarlettFamily} alt="The Scarlett Family" />
              </CardMedia>
              <CardTitle title="Family Home" subtitle="" />
              <CardText>
                <img src={scarlettArticle} alt="The Scarlett Family" />
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="Trove">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/645677"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        James Scarlett, 1st Baron Abinger
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="TROVE">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/154972483?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1917%2F06%2F26%2Fpage%2F18601136%2Farticle%2F154972483"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        THE SCARLETT FAMILY
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <a
                      title="By Johann Jacob Weber (Hrsg.), 1803–1880 [Public domain], via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File%3AIllustrirte_Zeitung_(1843)_19_295_1_Lord_Abinger.PNG"
                    >
                      <img
                        width="256"
                        alt="Illustrirte Zeitung (1843) 19 295 1 Lord Abinger"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Illustrirte_Zeitung_%281843%29_19_295_1_Lord_Abinger.PNG/256px-Illustrirte_Zeitung_%281843%29_19_295_1_Lord_Abinger.PNG"
                      />
                    </a>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Hollingworth Family"
                subtitle="Joseph Nicholsan Hollingworth"
                avatar={HollingworthAv}
              />
              <CardMedia
                overlay={
                  <CardTitle
                    title="1903"
                    subtitle="The Mullumbibmy Sawmill Founder."
                  />
                }
              >
                <img src={Sawmill} alt="The Mullumbimby Sawmill 1903" />
              </CardMedia>
              <CardTitle
                title="Family Home"
                subtitle="Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
              />
              <CardText>
                Nicholson (Nick) Hollingworth is the fifth generation of his
                family to be involved with the timber industry. The history of
                the Mullumbimby mill actually starts in Lismore where J.E.
                Glasgow had established another mill alongside the Richmond
                River. Joseph Nicholson Hollingworth, son of early Lismore
                settlers Thomas and Ann Hollingworth, was born in 1864. He
                received about three months schooling before he was 14 and began
                working for his mother's brother, Thomas King, felling scrub
                near Woodburn. Twelve months later he commenced an
                apprenticeship with J.E. Glasgow at his Lismore sawmill. Joseph
                eventually became a millwright and master sawmiller. In June
                1902 Joseph purchased Glasgow's Mullumbimby mill for £900. After
                a short time he had a partnership agreement with his cousin
                Robert Raymond Mallet who, apparently, had been involved with
                exporting timber from Western Australia at one time. It is not
                clear whether the partnership included the mill itself or
                whether it solely referred to the sale of the timber. In
                documentation the two men are referred to as timber merchants
                though it was the Hollingworth & Mallet Saw Mill. The Mill was
                situated in the middle of some heavily wooded areas which made
                delivery of logs more convenient. Bullocks were used to haul the
                timber. Nick tells us that the bullocks working in the timber
                yard were not yoked as was the normal practice. Instead they
                were harnessed which meant that they could move more easily
                through the obstacles in the yard and haul logs up the mill
                ramp. Mallet built a beautiful home next to the mill and called
                it The Gables. It became a showpiece. Joseph himself built a
                fine house which he called Belongin. The partnership of
                Hollingworth & Mallet was dissolved in 1915 and Joseph became
                the sole proprietor of the business enterprise. Joseph died in
                1919 in the influenza epidemic. Following his death the business
                was made into a company with various family members being
                involved. In 1964 the business was sold to Standards Sawmill Co.
                which closed the mill down. The site is now occupied by the
                Byron Shire Council Chambers.
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <a
                      href="https://www.northernstar.com.au/news/family-of-timber-workers/1873221/"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Family of Timber Workers"
                    >
                      FAMILY OF TIMBER WORKERS
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.wikitree.com/genealogy/HOLLINGWORTH"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="wikitree"
                    >
                      HOLLINGWORTH FAMILY TREE
                    </a>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <a
                href="https://www.geni.com/people/Georgiana-McCrae/6000000043956217248?through=6000000002188526287"
                rel="noreferrer noopener"
                target="_blank"
              >
                <CardHeader
                  title="Georgiana McCrae"
                  subtitle="Gifted woman who suffered outside of her natural milieu"
                  avatar={McCraeAv}
                />
              </a>
              <CardText>
                <CardTitle title="Family Home" subtitle="Authurs Chair" />

                <img src={McCraeAuthurs} alt="McCrae - Authurs Chair 1846ca" />
                <a
                  href="https://www.geni.com/people/General-George-Gordon-5th-Duke-of-Gordon/6000000002188526287?through=6000000043956217248"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Father of Georgiana McCrae"
                    subtitle="George Gordon 5th Duke of Gordon"
                    avatar={GordonFifth}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Elizabeth-Gordon-Duchess-of-Gordon/6000000008630274289?through=6000000002188526287"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Mother of Georgiana McCrae"
                    subtitle="Elizabeth Margaret Gordon (Brodie), Duchess of Gordon"
                    avatar={MotherMcCrae}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Alexander-Gordon-4th-Duke-of-Gordon/6000000003714053753?through=6000000002188526287"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Father of George Gordon"
                    subtitle="Alexander Gordon, 4th Duke of Gordon"
                    avatar={GordonFourth}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Jane-Gordon-Duchess-of-Gordon/6000000002188526277?through=6000000003714053753"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Duchess of Gordon"
                    subtitle="Jane Gordon (Maxwell), Duchess of Gordon"
                    avatar={JaneGordon}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Charles-Lennox-4th-Duke-of-Richmond-4th-Duke-of-Aubigny/6000000002333825058?through=6000000003484265483"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Daughter of Alexander Gordon, 4th Duke of Gordon and Jane Gordon"
                    subtitle="Charlotte Lennox, Duchess of Richmond"
                    avatar={Duchess}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Charlotte-Lennox-Duchess-of-Richmond/6000000003484265483?through=6000000003714053753"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Husband of Charlotte Lennox, Duchess of Richmond"
                    subtitle="Charles Lennox, 4th Duke of Richmond, 4th Duke of Aubigny"
                    avatar={Charles}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Charles-Gordon-Lennox-5th-Duke-of-Richmond/6000000003455094926?through=6000000002333825058"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Father of Charles Lennox"
                    subtitle="Charles Gordon-Lennox, 5th Duke of Richmond"
                    avatar={CharlesGordon}
                  />
                </a>
                <a
                  href="https://www.geni.com/people/Georgina-Countess-Bathurst/6000000002188493290?through=6000000002333825058"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <CardHeader
                    title="Sister to Charles-Lennox"
                    subtitle="Georgina Bathurst (Lennox)"
                    avatar={Bathurst}
                  />
                </a>
              </CardText>
              <CardTitle
                title="Painting by Georgiana McCrae"
                subtitle="Portrait of Eliza, 1845"
              />
              <CardText>
                <img src={Eliza} alt="Portrait of Eliza, 1845" />
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="National Trust">
                      <a
                        href="https://www.nationaltrust.org.au/collections/georgiana-mccrae-artist/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Georgiana McCrae - Artist
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="TROVE">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/118290120?browse=ndp%3Abrowse%2Ftitle%2FC%2Ftitle%2F11%2F1994%2F10%2F08%2Fpage%2F13362254%2Farticle%2F118290120"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Excellent Painter
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6">
            <Card>
              <CardHeader
                title="Spence Family"
                subtitle="John Brodie Spence"
                avatar={JohnSpenceAv}
              />
              <CardMedia
                overlay={
                  <CardTitle subtitle="Oil painting of Spence by Maude Gordon, c. 1900." />
                }
              >
                <img
                  src={CatherineSpence}
                  alt="Oil Painting of Catherine Helen Spence"
                />
              </CardMedia>
              <CardActions>
                <CardTitle title="Spence Family" subtitle="South Australia" />
                <CardText>
                  David Spence and Helen Brodie Spence sailed out from Melsrose,
                  Scotland to South Australia on the <i>Palmyra</i> in the year
                  1839. The colony had experienced several years of drought, the
                  contrast to native Scotland made made their daughter Catherine
                  Helen spence feel, "inclined to go and cut my throat".
                </CardText>
                <CardText>
                  Catherine Helen Spence was the fifth child of David and Helen.
                  She grew up to become a famous reformist and is a leading
                  figure in winning the right for Australian women to vote.
                </CardText>
                <CardText>
                  John Brodie Spence is the brother of Catherine Helen Spence
                  and he gained fame as a prominent South Australian Banker.
                </CardText>
                <CardActions>
                  <FlatButton label="Project Gutenberg">
                    <a
                      href="http://www.gutenberg.org/files/4220/4220-h/4220-h.htm"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      Autobiography by Catherine Helen Spence
                    </a>
                  </FlatButton>
                </CardActions>
                <CardActions>
                  <FlatButton>
                    <a
                      href="https://en.wikipedia.org/wiki/John_Brodie_Spence"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      John Brodie Spence
                    </a>
                  </FlatButton>
                </CardActions>
              </CardActions>
              <CardMedia>
                <img src={HighPriestess} alt="Courtesy of Trove" />
              </CardMedia>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="CATHERINE HELEN SPENCE">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/166449131?browse=ndp%3Abrowse%2Ftitle%2FQ%2Ftitle%2F824%2F1899%2F10%2F19%2Fpage%2F19461171%2Farticle%2F166449131"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="wikitree"
                      >
                        HIGH PRIESTESS OF EFFECTIVE VOTING
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="CATHERINE HELEN SPENCE">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/126770670?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F493%2F1911%2F08%2F19%2Fpage%2F13717221%2Farticle%2F126770670"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="wikitree"
                      >
                        THE CATHERINE SPENCE MEMORIAL.
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Cordato and Chambiras Families"
                subtitle="Casino and Dubbo"
                avatar={CordatoAv}
              />
              <CardMedia
                overlay={
                  <CardTitle
                    title=""
                    subtitle="Simon Cordato, holding son Emmanuel, and Cornelia nursing daughter Catherine."
                  />
                }
              >
                <img src={CordatoFamily} alt="Casino Baptism 1914" />
              </CardMedia>
              <CardTitle
                title="Casino Baptism 1914"
                subtitle="(Courtesy 'Life in Australia', published 1916)"
              />
              <CardText>
                George and Simon Emmanuel Theodorakakis (Cordatos), in silent
                partnership with their uncle Denis of Dubbo, were the initial
                managers of the Casino branch of the various Cordatos Bros
                enterprises. They were two of the six brothers who began
                arriving from Kythera after the turn of the century and
                initially settled around the New England Tablelands. Twenty year
                old Kyriacos (Kery), claiming 5yrs cafe experience in America,
                was the first to land in 1901 and after a couple of years
                trade-training at Moree was posted to Armidale to open a
                restaurant on behalf of Comino & Panaretto, the firm established
                by Victor Dimitri Panaretto at Moree around 1898, the same year
                Kery’s uncle, John Cordato, the son of Kyriacos and Marouli, nee
                Panaretto, had landed. In mid 1903 came Kery’s 21yr old brother,
                Tony, who joined him at Armidale, followed later in the year by
                their uncle Denis directly off the boat from London. But he
                clocked off after 6mths and hiked onto Glen Innes and thence
                Dubbo, where he was joined by Tony in 1909. Hot on Denis’ heels
                was Kery’s older brother Simon (Stylianos/Stellios) who also
                joined him directly off the boat and remained on the Armidale
                roster for 3yrs before coming to Casino in mid 1907 to
                rendezvous with George, who had landed in 1905 and spent a
                couple of years at Dubbo. Around 1908 George went off to manage
                the brothers branch at Hillgrove and 3yrs later Denis took a
                break on Kythera, the same year the youngest brother Jack turned
                up and a couple of years after Cordatos Bros had acquired the
                Armidale business from Comino & Panaretto. In late 1913 they
                sold Armidale to George Peter Comino (Galanis), whereupon Kery
                took the loot to Tenterfield to acquire the business of the
                Andronicos Bros (who then consolidated in Lismore) while Jack
                came down the range to Casino to say hello to Simon. Another set
                of Theodorakakis brothers around at the time were Jim, Con and
                Anthony, the sons of Kyriacos and Kirani, who chose to carry the
                name Theodore (and sometimes Theodorakis.) Con spent some time
                at Murbah in the early war years, but upon the arrival of Jim
                from the USA in 1917 the three opened a shop in Liverpool St.,
                Sydney, where they remained in partnership at least into the
                1930s. Maybe connected was Nick Theo Theodorakakis of Lismore
                and Woodburn, the brother-in-law of the Tenterfield Andronicos,
                who also adopted the name Theodore. His father appears to have
                landed in 1902 and spent most of his time around Sydney. Casino
                has the distinction as the spot chosen by Harry Catsoulis, the
                son of Theo Harry and Chrysanthi (nee Coroneo), to pop into the
                world in 1910, probably making him the first
                Kytherian-Australian on the north coast. His parents had ignored
                the instructions in the Greek employment manual and become dairy
                farmers somewhere along Camira Creek, Whiporie, down along the
                Grafton Road. Theo had landed as a 26yr old in late 1904 and had
                tried catering at Glen Innes and Grafton before acquiring this
                640acre farm in mid 1909, perhaps winning a crown land ballot or
                acquiring the farm of George Cordato. He was the first cousin of
                Mick Charles Catsoulis who married Peter Comino’s daughter
                Stella in Lismore in 1919, and probably connected to the
                Katsoulis of Woodburn and Ballina. Mick and Theo established a
                shop together at Bellingen in 1912, but upon Mick’s return from
                the Balkan Wars in 1915 they split up; Mick acquiring Victor
                Tsicalas’s cafe in Goondiwindi and Theo heading off to a farm at
                Aberdeen. He and Chrysanthi eventually settled around Urunga
                where their sons went on to establish the largest tomato farm in
                NSW. A couple of months after Harry Catsoulis made his
                appearance Simon and Cornelia Cordatos presented him with a
                playmate. Simon had done a quick trip home to Potamos in 1909 to
                successfully woo Cornelia Peter Chambiras, coming back in time
                to have daughter Catherine registered as a Casinorian.
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="Cordato">
                      <a
                        href="http://freepages.misc.rootsweb.ancestry.com/~aliens/chapter_10.htm"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="Cordatos Bros enterprises"
                      >
                        Cordatos Bros enterprises
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="Trove">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/92963261?browse=ndp%3Abrowse%2Ftitle%2FN%2Ftitle%2F81%2F1916%2F07%2F29%2Fpage%2F8678397%2Farticle%2F92963261"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="wikitree"
                      >
                        UNIQUE WEDDING - Northern Star (Lismore, NSW : 1876 -
                        1954) Sat 29 Jul 1916 Page 8
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
              <CardMedia
                overlay={<CardTitle title="" subtitle="Casino 1906" />}
              >
                <img src={ChambirasFamily} alt="Casino 1906" />
              </CardMedia>
              <a
                href="https://www.geni.com/people/Kyriakos-Theodorakakis-Cordato/3135030"
                rel="noreferrer noopener"
                target="_blank"
              >
                <CardHeader
                  title="Kyriakos Theodorakakis Cordato"
                  subtitle="Brother of Anthony Cordato and Jim Cordato"
                  avatar={CordatoAv}
                />
              </a>
              <a
                href="https://www.geni.com/people/Anthony-Theodorakakis-Cordato/3135051?through=3135030"
                rel="noreferrer noopener"
                target="_blank"
              >
                <CardHeader
                  title="Anthony Theodorakakis Cordato"
                  subtitle="Brother of Kyriakos Cordato and Jim Cordato"
                  avatar={AnthonyAv}
                />
              </a>
              <a
                href="https://www.geni.com/people/Jim-Theodorakakis-Cordato/3134995?through=3135030"
                rel="noreferrer noopener"
                target="_blank"
              >
                <CardHeader
                  title="Jim Theodorakis Cordato"
                  subtitle="Brother of Kyriakos Cordato and Anthony Cordato"
                  avatar={JimAv}
                />
              </a>
              <a
                href="https://www.geni.com/people/Anthi-Minoucos/3135489?through=3135051"
                rel="noreferrer noopener"
                target="_blank"
              >
                <CardHeader
                  title="Anthi Minoucos"
                  subtitle="Wife of Anthony Cordato"
                  avatar={AnthiAv}
                />
              </a>
              <a
                href="https://www.geni.com/people/Manuel-A-Cordato/3639560?through=3135051"
                rel="noreferrer noopener"
                target="_blank"
              >
                <CardHeader
                  title="Manuel A. Cordato"
                  subtitle="Son of Anthony Cordato and Anthi Minoucos"
                  avatar={ManuelAv}
                />
              </a>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="The Paterson Family"
                subtitle="Banjo Paterson"
                avatar={patersonAv}
              />
              <CardMedia
                overlay={
                  <CardTitle title="" subtitle="The man from snowy river." />
                }
              >
                <img src={manSnowyRiver} alt="The Man From Snowy River" />
              </CardMedia>
              <CardTitle title="" subtitle="" />
              <CardText>
                <img src={Banjo} alt="Banjo Paterson" />
              </CardText>
              <CardText>
                <img src={theAge} alt="The Melbourne Age" />
              </CardText>
              <CardText>
                <img src={Eminent} alt="Australia's Great Poet" />
                <img src={Poet} alt="Australia's Great Poet" />
                <img src={Man} alt="Man from Snowy River" />
                <img src={Three} alt="Man from Snowy River" />
                <img src={Immediate} alt="Australia's Great Poet" />
                <img src={Busy} alt="Australia's Great Poet" />
              </CardText>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card>
              <CardText>
                <img src={Volume} alt="Australia's Great Poet" />
                <img src={Remainder} alt="Australia's Great Poet" />
                <img src={York} alt="Australia's Great Poet" />
                <img src={Wind} alt="Australia's Great Poet" />
                <img src={Clancy} alt="Australia's Great Poet" />
              </CardText>
              <CardActions>
                <List>
                  <ListItem>
                    <FlatButton label="WIKITREE">
                      <a
                        href="https://www.wikitree.com/genealogy/PATERSON"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="wikitree"
                      >
                        PATERSON FAMILY TREE
                      </a>
                    </FlatButton>
                  </ListItem>
                  <ListItem>
                    <FlatButton label="BANJO PATTERSON">
                      <a
                        href="http://trove.nla.gov.au/newspaper/article/101278457?browse=ndp%3Abrowse%2Ftitle%2FL%2Ftitle%2F423%2F1912%2F05%2F13%2Fpage%2F10533414%2Farticle%2F101278457"
                        rel="noreferrer noopener"
                        target="_blank"
                        alt="Trove"
                      >
                        MR. A. B. (BANGO) PATTERSON
                      </a>
                    </FlatButton>
                  </ListItem>
                </List>
              </CardActions>
            </Card>
            <hr />
          </div>
        </div>
      </main>
    );
  }
}

export default HomeMain;
