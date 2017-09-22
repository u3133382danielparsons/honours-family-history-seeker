import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import GeorgianaAv from './img/georgiana.jpg';
import TruganiniAv from './img/Truganini.jpg';
import ChisholmAv from './img/ChisholmAv.jpg';
import MaryAv from './img/mary.jpg';
import VidaAv from './img/vida.jpg';
import MollyAv from './img/molly.jpg';
import HicksAv from './img/hicks.jpg';
import SpenceAv from './img/spence.jpg';

class PeopleMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <List>
            <Link to="../components/people/women/Georgiana">
              <ListItem
                primaryText="The life of Georgiana McCrae - an aristocratic woman in early Melbourne"
                secondaryText={<p>Daughter of the Duke of Gordon.</p>}
                leftAvatar={<Avatar src={GeorgianaAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Truganini">
              <ListItem
                primaryText="Truganini - negotiator, diplomat and guerilla fighter"
                secondaryText={<p>Tasmanian Aboriginal leader.</p>}
                leftAvatar={<Avatar src={TruganiniAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Chisholm">
              <ListItem
                primaryText="Bounty immigrant women and Caroline Chisholm"
                secondaryText={
                  <p>Caroline worked hard to educate the women.</p>
                }
                leftAvatar={<Avatar src={ChisholmAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Mary">
              <ListItem
                primaryText="Who was Mary Lee?"
                secondaryText={<p>Let us be up and doing.</p>}
                leftAvatar={<Avatar src={MaryAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Vida">
              <ListItem
                primaryText="Vida Goldstein"
                secondaryText={<p>Feminist and Suffragist.</p>}
                leftAvatar={<Avatar src={VidaAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Molly">
              <ListItem
                primaryText="Molly Craig"
                secondaryText={<p>Endurance and Courage.</p>}
                leftAvatar={<Avatar src={MollyAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Hicks">
              <ListItem
                primaryText="Mary Ann Hicks"
                secondaryText={<p>14 children in total!</p>}
                leftAvatar={<Avatar src={HicksAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/women/Spence">
              <ListItem
                primaryText="Catherine Helen Spence"
                secondaryText={<p>South Australian Suffragist</p>}
                leftAvatar={<Avatar src={SpenceAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
          </List>
        </div>
      </main>
    );
  }
}

export default PeopleMain;
