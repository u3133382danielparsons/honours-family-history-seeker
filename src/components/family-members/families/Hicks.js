import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import HicksAv from '../../../components/people/img/hicks.jpg';

class Hicks extends Component {
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
            title="Hicks Family (McKenzie)"
            subtitle="Family Members"
            avatar={HicksAv}
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
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Mary Ann Hicks (McKenzie)" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Alexander McKenzie of Ellengowan" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Anne McLean" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Henry Thomas Hicks" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Ann Hicks (1862-1862)" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Catherine Hicks (1862-1862)" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="James Alexander Hicks (1863 – 1939)" />
                </Link>

                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Margaret Minnie Hicks (1865 – 1952 )" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Alexander Henry Hicks (1866-1957)" />
                </Link>
                <Link to="/components/people/women/Hicks">
                  <MenuItem primaryText="Henry William Hicks (1868-1973)" />
                </Link>

                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Mary Alice Hicks (9.1.1871-5.9.1945) " />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="George Hicks (19.1.1873- 1956)" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Christina Ann Hicks (4.2.1875 – 1951)" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Henry Thomas Hicks (28.4.1877 -1944 or 1946)" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Edith Florence Hicks (25.3.1880 – 9.4.1958)" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Ida McKenzie Hicks (10.9.1883?- 1967" />
                </Link>
                <Link to="/components/people/women/Georgiana">
                  <MenuItem primaryText="Richard Ernest Hicks (4.9.1887 ?- 1953)" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Hicks;
