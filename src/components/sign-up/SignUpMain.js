import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

class SignUpMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <Divider />
          <List>
            <ListItem>
              <Card>
                <CardText>
                  <Subheader>SignUp!</Subheader>
                  <FlatButton />
                </CardText>
              </Card>
            </ListItem>
          </List>
        </div>
      </main>
    );
  }
}

export default SignUpMain;
