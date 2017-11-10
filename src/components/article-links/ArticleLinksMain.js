import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import FormDivider from './components/FormDivider';
import Subheader from 'material-ui/Subheader';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

class ArticleLinksMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <List>
            <ListItem>Add Links to Articles Found in Trove</ListItem>
          </List>
          <List>
            <ListItem>
              <FormDivider />
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>The Sun, Sydney NSW</Subheader>
                  <Subheader>CHINESE WEDDING IN SYDNEY.</Subheader>
                  <Subheader>Sunday 18 Feb 1917, Page 16</Subheader>
                  <a
                    href="http://trove.nla.gov.au/newspaper/article/221962375?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F1180%2F1917%2F02%2F18%2Fpage%2F24413712%2Farticle%2F221962375"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt=" The Sun (Sydney, NSW : 1910 - 1954) Sun 18 Feb 1917 Page 16"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>Hobart Town Gazette</Subheader>
                  <Subheader>SHIPPING INTELLIGENCE</Subheader>
                  <Subheader>Saturday 29th Oct 1825, Page 2</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/8790805?browse=ndp%3Abrowse%2Ftitle%2FH%2Ftitle%2F22%2F1825%2F10%2F29%2Fpage%2F679705%2Farticle%2F8790805"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="Hobart Town Gazette, Sat 29 Oct 1825 - Page 2"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>The Tweed Daily, Mullimbimby</Subheader>
                  <Subheader>Mullimbimby - The Gray Family</Subheader>
                  <Subheader>Feburary 8, 1922.</Subheader>
                  <a
                    href="http://trove.nla.gov.au/newspaper/article/190722784?browse=ndp%3Abrowse%2Ftitle%2FT%2Ftitle%2F1007%2F1922%2F02%2F08%2Fpage%2F21492780%2Farticle%2F190722784"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="From Trove. The Tweed Daily, Mullimbimby, Feburary 8, 1922."
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>
                    The Perth Gazette and Western Australian Journal
                  </Subheader>
                  <Subheader>THE LATE LORD ABINGER</Subheader>
                  <Subheader>Saturday 15 Feb 1845 - Page 4</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/645677"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>The Canberra Times</Subheader>
                  <Subheader>
                    {' '}
                    Gifted woman who suffered outside of her natural milieu
                  </Subheader>
                  <Subheader>Saturday 8 Oct 1994, Page 13 </Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/118290120?browse=ndp%3Abrowse%2Ftitle%2FC%2Ftitle%2F11%2F1994%2F10%2F08%2Fpage%2F13362254%2Farticle%2F118290120"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader> Quiz and the Lantern, Adelaide, SA </Subheader>
                  <Subheader>HIGH PRIESTESS OF EFFECTIVE VOTING</Subheader>
                  <Subheader>Thursday 19th Oct 1899</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/166449131?browse=ndp%3Abrowse%2Ftitle%2FQ%2Ftitle%2F824%2F1899%2F10%2F19%2Fpage%2F19461171%2Farticle%2F166449131"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="wikitree"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>The Maitland Weekly Mercury, NSW</Subheader>
                  <Subheader>THE CATHERINE SPENCE MEMORIAL.</Subheader>
                  <Subheader>Saturday 19 Aug 1911, Page 11</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/126770670?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F493%2F1911%2F08%2F19%2Fpage%2F13717221%2Farticle%2F126770670"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="wikitree"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader> Northern Star, Lismore, NSW</Subheader>
                  <Subheader>UNIQUE WEDDING</Subheader>
                  <Subheader>Saturday 29 Jul 1916, Page 8</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/92963261?browse=ndp%3Abrowse%2Ftitle%2FN%2Ftitle%2F81%2F1916%2F07%2F29%2Fpage%2F8678397%2Farticle%2F92963261"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="wikitree"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>Leader, Orange, NSW</Subheader>
                  <Subheader>MR. A. B. (BANGO) PATTERSON</Subheader>
                  <Subheader> Mon 13 May 1912,Page 2</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/101278457?browse=ndp%3Abrowse%2Ftitle%2FL%2Ftitle%2F423%2F1912%2F05%2F13%2Fpage%2F10533414%2Farticle%2F101278457"
                    rel="noreferrer noopener"
                    target="_blank"
                    alt="Trove"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>Morwell Advertiser, Morwell, Vic.</Subheader>
                  <Subheader>Vida Goldstein</Subheader>
                  <Subheader>Friday 27 Nov 1903, Page 2</Subheader>
                  <a
                    href="http://trove.nla.gov.au/newspaper/article/65881559?searchTerm=Vida%20Goldstein&searchLimits="
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>The Advertiser, Adelaide, SA</Subheader>
                  <Subheader> MRS. MARY LEE.</Subheader>
                  <Subheader> Monday 7 Apr 1902, Page 4</Subheader>

                  <a
                    href="http://trove.nla.gov.au/newspaper/article/4908749?searchTerm=Mary%20Lee&searchLimits="
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlatButton label="Link to Trove Article" primary={true} />
                  </a>
                </CardText>
              </Card>
            </ListItem>
          </List>
        </div>
      </main>
    );
  }
}

export default ArticleLinksMain;
