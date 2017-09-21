import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardMedia,
  CardTitle,
  CardActions
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Images from 'src/img'
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

class HomeMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-6 col-lg-12">
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
                <FlatButton label="Trove">
                  <a
                    href="http://trove.nla.gov.au/newspaper/article/154972483?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1917%2F06%2F26%2Fpage%2F18601136%2Farticle%2F154972483"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    The Melbourne Age, Tuesday 26th June, 1917
                  </a>
                </FlatButton>
                <FlatButton label="Wikipedia">
                  <a
                    href="https://en.wikipedia.org/wiki/James_Scarlett,_1st_Baron_Abinger"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    James Scarlett, 1st Baron Abinger
                  </a>
                </FlatButton>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-12">
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
                title="Tweed Daily (Murwillumbah, NSW : 1914 - 1949). Montecollum,
                 and Burringbar."
                subtitle=""
              />
              <CardText>
                <img
                  src={grayArticle}
                  alt="First half of Article on Gray Family"
                />
              </CardText>
              <CardActions>
                <FlatButton label="Trove">
                  <a
                    href="http://trove.nla.gov.au/newspaper/article/190722784?browse=ndp%3Abrowse%2Ftitle%2FT%2Ftitle%2F1007%2F1922%2F02%2F08%2Fpage%2F21492780%2Farticle%2F190722784"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="From Trove. The Tweed Daily, Mullimbimby, Feburary 8, 1922."
                  >
                    The Tweed Daily, Mullimbimby, Feburary 8, 1922.
                  </a>
                </FlatButton>
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
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-12">
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
                subtitle=" Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
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
                <FlatButton label="Hollingworth - Family of Timber Workers">
                  <a
                    href="https://www.northernstar.com.au/news/family-of-timber-workers/1873221/"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="Family of Timber Workers"
                  >
                    FAMILY OF TIMBER WORKERS
                  </a>
                </FlatButton>
                <FlatButton label="WIKITREE - HOLLINGWORTH FAMILY TREE">
                  <a
                    href="https://www.wikitree.com/genealogy/HOLLINGWORTH"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="wikitree"
                  >
                    HOLLINGWORTH FAMILY TREE
                  </a>
                </FlatButton>
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-12">
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
              </CardActions>
            </Card>
            <hr />
          </div>

          <div className="col-md-6 col-lg-12">
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
                <img src={Volume} alt="Australia's Great Poet" />
                <img src={Remainder} alt="Australia's Great Poet" />
                <img src={York} alt="Australia's Great Poet" />
                <img src={Wind} alt="Australia's Great Poet" />
                <img src={Clancy} alt="Australia's Great Poet" />
              </CardText>
              <CardActions>
                <FlatButton label="WIKITREE - PATERSON FAMILY TREE">
                  <a
                    href="https://www.wikitree.com/genealogy/PATERSON"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="wikitree"
                  >
                    PATERSON FAMILY TREE
                  </a>
                </FlatButton>
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
