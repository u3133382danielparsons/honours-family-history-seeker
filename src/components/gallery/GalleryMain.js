import React, { Component } from 'react';
// material-ui components
import {
  Card,
  CardText,
  CardMedia,
  CardTitle,
  CardActions
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// src
import McCraeGallery from './galleries/McCraeGallery';
import McCraeGalleryTwo from './galleries/McCraeGalleryTwo';
import McCraeGalleryThree from './galleries/McCraeGalleryThree';
import McCraeGalleryFour from './galleries/McCraeGalleryFour';
import McCraeGalleryFive from './galleries/McCraeGalleryFive';

import hobartLand from '../../img/bryant/hobartLand.jpg';
import scarlettFamily from '../../img/scarlett/scarlettFamily.jpg';
import grayFamily from '../../img/gray/grayFamily.jpg';
import CatherineSpence from '../../img/spence/Catherine-Spence.jpg';
import Wiloma from '../../img/nla.jpg';
import Erj from '../../img/erj.jpg';
import Glover from '../../img/glover.jpg';
import Mckeller from '../../img/mckeller.jpg';
import Chinn from '../../img/chinn.jpg';

class GalleryMain extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <McCraeGallery />
        </div>
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryTwo />
        </div>
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryThree />
        </div>
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryFour />
        </div>

        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="A family standing outside a tin shack called Wiloma during the Great Depression, New South Wales, ca. 1932" />
              }
            >
              <img
                src={Wiloma}
                alt="A family standing outside a tin shack called Wiloma during the Great Depression, New South Wales, ca. 1932"
              />
            </CardMedia>
            <CardText>
              <a
                href="https://www.nla.gov.au/research-guides/family-history"
                rel="noreferrer noopener"
                target="_blank"
              >
                NATIONAL LIBRARY OF AUSTRALIA FAMILY HISTORY
              </a>
            </CardText>
          </Card>
        </div>
        <hr />
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryFive />
        </div>
        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Wedding of Elsie May Chinn and Kum Mow, Sydney, 1917" />
              }
            >
              <img
                src={Chinn}
                alt="Wedding of Elsie May Chinn and Kum Mow, Sydney, 1917"
              />
            </CardMedia>

            <CardText>
              <a
                href="http://chineseaustralia.org/category/books/"
                rel="noreferrer noopener"
                target="_blank"
              >
                THOUGHTS ON THE HISTORY AND HERITAGE OF CHINESE AUSTRALIA - by
                Kate Bagnall
              </a>
            </CardText>
          </Card>
        </div>
        <hr />

        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Samias Family - Mullumbimby New South Wales" />
              }
            >
              <img src={grayFamily} alt="Hobart in the 1800s" />
            </CardMedia>
            <CardText>
              <a
                href="http://freepages.history.rootsweb.ancestry.com/~aliens/chapter_2.htm"
                rel="noreferrer noopener"
                target="_blank"
                alt="ALIENS OF THE TWEED AND BRUNSWICK"
              >
                ALIENS OF THE TWEED AND BRUNSWICK
              </a>
            </CardText>
          </Card>
        </div>
        <hr />
        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="The Glover Family Queensland 1935" />
              }
            >
              <img src={Glover} alt="Glover Family" />
            </CardMedia>
            <CardText>
              <a
                href="http://www.queenslandfamilytrees.com/getperson.php?personID=I5733&tree=1"
                rel="noreferrer noopener"
                target="_blank"
              >
                Julia Sarah Glover
              </a>
            </CardText>
          </Card>
        </div>
        <hr />
        <div className="col-md-6">
          <Card>
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
          </Card>
        </div>
        <hr />
        <div className="col-md-6">
          <Card>
            <CardMedia overlay={<CardTitle subtitle="Catherine Spence" />}>
              <img src={CatherineSpence} alt="Catherine Spence" />
            </CardMedia>
            <CardText>
              <a
                href="http://trove.nla.gov.au/newspaper/article/166449131?browse=ndp%3Abrowse%2Ftitle%2FQ%2Ftitle%2F824%2F1899%2F10%2F19%2Fpage%2F19461171%2Farticle%2F166449131"
                rel="noreferrer noopener"
                target="_blank"
                alt="wikitree"
              >
                HIGH PRIESTESS OF EFFECTIVE VOTING
              </a>
            </CardText>
          </Card>
        </div>
        <hr />
        <div className="col-md-12">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Bryant Family Home - Hobart Tasmaina" />
              }
            >
              <img src={hobartLand} alt="Hobart in the 1800s" />
            </CardMedia>

            <CardText>
              <a
                href="http://www.tasfhs.org/Volume%2019.pdf"
                rel="noreferrer noopener"
                target="_blank"
                alt="A TALE OF FOUR BROTHERS"
              >
                A TALE OF FOUR BROTHERS
              </a>
            </CardText>
          </Card>
        </div>
        <hr />

        <div className="col-md-12">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Mckeller Family Home - Victoria c1900" />
              }
            >
              <img src={Mckeller} alt="Mckeller Family Victoria c.1900" />
            </CardMedia>
            <CardText>
              <a
                href="https://www.slv.vic.gov.au/whats-on/finding-families"
                rel="noreferrer noopener"
                target="_blank"
                alt="Victorian State Library"
              >
                Finding Families
              </a>
            </CardText>
          </Card>
        </div>
        <hr />
        <div className="col-md-6">
          <Card>
            <CardMedia overlay={<CardTitle subtitle="An 1850s Family" />}>
              <img src={Erj} alt="Ethan + Rodney + Jeff" />
            </CardMedia>
            <CardText>
              <CardActions>
                <FlatButton label="Chinese Australians">
                  <a
                    href="http://chineseaustralia.org/category/books/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    by Kate Bagnall
                  </a>
                </FlatButton>
              </CardActions>
            </CardText>
          </Card>
        </div>
        <hr />
      </div>
    );
  }
}

export default GalleryMain;
