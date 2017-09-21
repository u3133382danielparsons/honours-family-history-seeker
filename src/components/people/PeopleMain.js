import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Georgiana from './img/georgiana.jpg';
import Trugannie from './img/Trugannie.jpg';

class PeopleMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <List>
            <ListItem
              primaryText="The life of Georgiana McCrae - an aristocratic woman in early Melbourne"
              secondaryText={<p>Daughter of the Duke of Gordon.</p>}
              leftAvatar={<Avatar src={Georgiana} />}
              rightIcon={<ActionInfo />}
            />
            <ListItem
              primaryText="Truganini - negotiator, diplomat and guerilla fighter"
              secondaryText={<p>Tasmanian Aboriginal leader.</p>}
              leftAvatar={<Avatar src={Trugannie} />}
              rightIcon={<ActionInfo />}
            />
          </List>
        </div>
      </main>
    );
  }
}

export default PeopleMain;
