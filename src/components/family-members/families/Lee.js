import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import MaryAv from '../../../components/people/img/mary.jpg';

class Lee extends Component {
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
            title="Lee Family"
            subtitle="Family Members"
            avatar={MaryAv}
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
                <Link to="/components/people/women/Mary">
                  <MenuItem primaryText="Mary Lee" />
                </Link>
                <Link to="/components/people/women/Mary">
                  <MenuItem primaryText="John Walsh" />
                </Link>
                <Link to="/components/people/women/Mary">
                  <MenuItem primaryText="John Benjamin Lee" />
                </Link>
                <Link to="/components/people/women/Mary">
                  <MenuItem primaryText="Charles Lee" />
                </Link>
                <Link to="/components/people/women/Mary">
                  <MenuItem primaryText="George Lee" />
                </Link>
                <Link to="/components/people/women/Mary">
                  <MenuItem primaryText="James Lee" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Lee;
