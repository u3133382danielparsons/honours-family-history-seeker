import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import {
  Card,
  CardHeader,
  CardText,
  CardMedia,
  CardTitle,
  CardActions
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FamiliesMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <CardTitle title="The Scarlett Family" subtitle="History" />
              <CardHeader title="Family Members" subtitle="Include" />
              <List>
                <ListItem>Hugh Scarlett</ListItem>
              </List>
              <CardText>
                Major H.R. Scarlett was brother to Lord Abinger
              </CardText>
              <List>
                <ListItem>Sir James Scarlett</ListItem>
              </List>
              <CardText>
                James Scarlett became Attorney-General and Lord Chief Baron of
                the Exchequer.
              </CardText>
              <List>
                <ListItem>Lord Abinger</ListItem>
              </List>
              <CardText>
                Lord Abinger is the sixth baron, descended from the advocate Sir
                James Scarlett. Lord Abinger was a barrister by profession and
                he lived in the traditions of the bar as the deadlies
                cross-examiner who ever handled a witness in the box.
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
              <CardMedia
                overlay={
                  <CardTitle
                    title="The Scarlett Family"
                    subtitle="fdskfkdsa;"
                  />
                }
              />
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <CardHeader title="Scarlett" subtitle=" Scarlett" />
              <CardMedia
                overlay={
                  <CardTitle
                    title="The Scarlett Family"
                    subtitle="fdskfkdsa;"
                  />
                }
              />
              <CardTitle title="Family Home" subtitle="dsffd" />
              <CardText />
              <CardActions>
                <FlatButton label="Trove">
                  <a href="http://trove.nla.gov.au/newspaper/article/154972483?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1917%2F06%2F26%2Fpage%2F18601136%2Farticle%2F154972483">
                    The Melbourne Age, Tuesday 26th June, 1917
                  </a>
                </FlatButton>
                <FlatButton label="Wikipedia">
                  <a href="https://en.wikipedia.org/wiki/James_Scarlett,_1st_Baron_Abinger">
                    James Scarlett, 1st Baron Abinger
                  </a>
                </FlatButton>
              </CardActions>
            </Card>
          </div>
        </div>
      </main>
    );
  }
}

export default FamiliesMain;
