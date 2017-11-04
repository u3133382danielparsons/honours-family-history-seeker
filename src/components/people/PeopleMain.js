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
import BryantTas from '../../img/bryant/Tasmania2015.jpg';
import HollingworthAv from '../../img/hollingworth/HollingworthAv.jpg';
import GrayAv from '../../img/gray/grayAv.jpg';
import PatersonAv from '../../img/paterson/hat.jpg';
import ScarlettAv from '../../img/scarlett/scarlettAv.jpg';
import AnthonyAv from '../../img/cordato/anthony.jpg';

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
            <Link to="../components/people/men/BryantBrothers">
              <ListItem
                primaryText="A Tale of Brothers - W.S. Griffith"
                secondaryText={
                  <p>Proud family began with theft of a coat and a gun</p>
                }
                leftAvatar={<Avatar src={BryantTas} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/men/ThomasHollingworth">
              <ListItem
                primaryText="Thomas Hollingworth"
                secondaryText={<p>by Margaret Henderson.</p>}
                leftAvatar={<Avatar src={HollingworthAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/men/HenryGray">
              <ListItem
                primaryText="Henry William Gray"
                secondaryText={<p>Life Summary.</p>}
                leftAvatar={<Avatar src={GrayAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/men/BanjoPaterson">
              <ListItem
                primaryText="BanjoPaterson"
                secondaryText={<p>A Bush Poet.</p>}
                leftAvatar={<Avatar src={PatersonAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/men/LordScarlett">
              <ListItem
                primaryText="James Scarlett, 1st Baron Abinger"
                secondaryText={<p>Lord Abinger.</p>}
                leftAvatar={<Avatar src={ScarlettAv} />}
                rightIcon={<ActionInfo />}
              />
            </Link>
            <Link to="../components/people/men/AnthonyCordato">
              <ListItem
                primaryText="Anthony Cordato"
                secondaryText={<p>Casino N.S.W.</p>}
                leftAvatar={<Avatar src={AnthonyAv} />}
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
