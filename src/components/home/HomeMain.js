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

class HomeMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-sm-6">
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
          </div>
          <div className="col-sm-6">
            <Card>
              <CardHeader
                title="The Gray Family - Mullumbibmy"
                subtitle="1934"
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
                Byron Bay and Burringbar."
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
                  >
                    The Tweed Daily, Mullimbimby, Feburary 8, 1922.
                  </a>
                </FlatButton>
                <FlatButton label="Ancestory">
                  <a
                    href="http://freepages.history.rootsweb.ancestry.com/~aliens/chapter_2.htm"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Aliens of the Tweed and Brunswick
                  </a>
                </FlatButton>
              </CardActions>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <CardHeader title="Sheila Gray" subtitle="1934" avatar={grayAv} />
              <CardMedia
                overlay={<CardTitle title="The Gray Family" subtitle="1898" />}
              >
                <img src={grayFamily} alt="The Gray Family" />
              </CardMedia>
              <CardTitle
                title="Family Home"
                subtitle=" Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
              />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
          <hr />
          <div className="col-sm-6">
            <Card>
              <CardHeader title="Sheila Gray" subtitle="1934" avatar={grayAv} />
              <CardMedia
                overlay={<CardTitle title="The Gray Family" subtitle="1898" />}
              >
                <img src={grayFamily} alt="The Gray Family" />
              </CardMedia>
              <CardTitle
                title="Family Home"
                subtitle=" Tweed Daily (Murwillumbah, NSW : 1914 - 1949)"
              />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
          <hr />
        </div>
      </main>
    );
  }
}

export default HomeMain;
