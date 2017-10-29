import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import JohnSpenceAv from '../../../img/spence/John-Brodie-Spence.jpg';

class Spence extends Component {
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
            title="Spence Family"
            subtitle="Family Members"
            avatar={JohnSpenceAv}
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
                <MenuItem primaryText="David Spence" />

                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="Agnes Spence" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="Janet Murray (Spence)" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="William Richard Spence" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="John Brodie Spence" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="Catherine Helen Spence" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="David Wauchope Spence" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="Mary Brodie (Spence) Wren" />
                </Link>
                <Link to="../../components/people/women/Spence">
                  <MenuItem primaryText="Eliza Spence" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Spence;
