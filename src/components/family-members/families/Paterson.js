import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import patersonAv from '../../../img/paterson/hat.jpg';

class Paterson extends Component {
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
            title="Paterson Family"
            subtitle="Family Members"
            avatar={patersonAv}
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
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Andrew Bogle Paterson" />
                </Link>
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Rose Florence Lumsdaine (Paterson)" />
                </Link>
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Andrew Barton Paterson" />
                </Link>
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Alice Emily Paterson (Walker)" />
                </Link>
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Hugh Barton Paterson" />
                </Link>
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Alice Emily Paterson (Walker)" />
                </Link>
                <Link to="/components/people/men/BanjoPaterson">
                  <MenuItem primaryText="Alice Emily Paterson (Walker)" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Paterson;
