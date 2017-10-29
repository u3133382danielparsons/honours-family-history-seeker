import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import HollingworthAv from '../../../img/hollingworth/HollingworthAv.jpg';

class Hollingworth extends Component {
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
            title="Hollingworth and King Families"
            subtitle="Family Members"
            avatar={HollingworthAv}
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
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="Thomas Nicholsan Hollingworth" />
                </Link>
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="Ann Hollingworth (King)" />
                </Link>
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="William Parrot King" />
                </Link>
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="Thomas King." />
                </Link>
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="Joseph Nicholsan Hollingworth" />
                </Link>
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="David John Hollingworth" />
                </Link>
                <Link to="/components/people/men/ThomasHollingworth">
                  <MenuItem primaryText="Nicholson (Nick) Hollingworth" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Hollingworth;
