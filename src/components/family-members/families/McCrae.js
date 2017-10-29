import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import McCraeAv from '../../../components/people/img/georgiana.jpg';

class McCrae extends Component {
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
            title="McCrae Family (Gordon)"
            subtitle="Family Members"
            avatar={McCraeAv}
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
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Georgiana McCrae" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="George Gordon, 5th Duke of Gordon" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Elizabeth Margaret Gordon (Brodie), Duchess of Gordon" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Alexander Gordon, 4th Duke of Gordon" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Jane Gordon (Maxwell), Duchess of Gordon" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Cosmo George Gordon, 3rd Duke of Gordon" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Andrew Murchison McCrae" />
                </Link>

                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Jane Gordon (Maxwell), Duchess of Gordon" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default McCrae;
