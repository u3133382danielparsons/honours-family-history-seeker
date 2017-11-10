import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import MollyAv from '../../../components/people/img/molly.jpg';

class Kelly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Kelly Family"
            subtitle="Family Members"
            avatar={MollyAv}
          />
          <div>
            <RaisedButton
              primary={true}
              onClick={this.handleTouchTap}
              label="SELECT"
            />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <Link to="/components/people/women/Molly">
                  <MenuItem primaryText="Molly Kelly (Craig)" />
                </Link>
                <Link to="/components/people/women/Molly">
                  <MenuItem primaryText="Annabelle Kelly" />
                </Link>
                <Link to="/components/people/women/Molly">
                  <MenuItem primaryText="Doris Kelly" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Kelly;
