import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import scarlettAv from '../../../img/scarlett/scarlettAv.jpg';

class Scarlett extends Component {
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
            title="Scarlett Family"
            subtitle="Family Members"
            avatar={scarlettAv}
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
                <Link to="/components/people/men/LordScarlett">
                  <MenuItem primaryText="Sir James Scarlett" />
                </Link>
                <Link to="/components/people/men/LordScarlett">
                  <MenuItem primaryText="Lord Abinger" />
                </Link>
                <Link to="/components/people/men/LordScarlett">
                  <MenuItem primaryText="Hugh Scarlett" />
                </Link>
                <Link to="/components/people/men/LordScarlett">
                  <MenuItem primaryText="L.F. Scarlett" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Scarlett;
