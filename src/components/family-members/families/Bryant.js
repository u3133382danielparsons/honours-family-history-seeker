import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import bryantTas from '../../../img/bryant/Tasmania2015.jpg';

class Bryant extends Component {
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
            title="Bryant Family"
            subtitle="Family Members"
            avatar={bryantTas}
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
                <Link to="/components/people/men/BryantBrothers">
                  <MenuItem primaryText="Matthew Bryant" />
                </Link>
                <Link to="/components/people/men/BryantBrothers">
                  <MenuItem primaryText="George Bryant" />
                </Link>
                <Link to="/components/people/men/BryantBrothers">
                  <MenuItem primaryText="Francis Bryant" />
                </Link>
                <Link to="/components/people/men/BryantBrothers">
                  <MenuItem primaryText="James Bryant" />
                </Link>
                <Link to="/components/people/men/BryantBrothers">
                  <MenuItem primaryText="Edmund Bryant" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Bryant;
