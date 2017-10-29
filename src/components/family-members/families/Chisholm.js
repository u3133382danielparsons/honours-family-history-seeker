import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import ChisholmAv from '../../../components/people/img/ChisholmAv.jpg';

class ChisholmFamily extends Component {
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
            title="Chisholm Family"
            subtitle="Family Members"
            avatar={ChisholmAv}
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
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Caroline Chisholm " />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Archibald Chisholm" />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="William Chisholm" />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Henry John Chisholm" />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Sydney Carew Chisholm" />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Caroline Agnes Gray" />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Sarah Monica Chisholm" />
                </Link>
                <Link to="/components/people/women/Chisholm">
                  <MenuItem primaryText="Harriot Monica CHISHOLM" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default ChisholmFamily;
