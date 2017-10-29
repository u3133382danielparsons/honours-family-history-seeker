import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import TruganiniAv from '../../../components/people/img/Truganini.jpg';

class TruganiniFamily extends Component {
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
            title="Truganini Family"
            subtitle="Family Members"
            avatar={TruganiniAv}
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
                <Link to="/components/people/women/Truganini">
                  <MenuItem primaryText="Truganini " />
                </Link>
                <Link to="/components/people/women/Truganini">
                  <MenuItem primaryText="Truganini's Mother" />
                </Link>
                <Link to="/components/people/women/Truganini">
                  <MenuItem primaryText="Paraweena" />
                </Link>
                <Link to="/components/people/women/Truganini">
                  <MenuItem primaryText="Wooraddy" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default TruganiniFamily;
