import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'material-ui/Card';
import grayAv from '../../../img/gray/grayAv.jpg';

class Gray extends Component {
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
            title="Gray Family"
            subtitle="Family Members"
            avatar={grayAv}
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
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="John Thomas Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Annie Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Daniel Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Joseph Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Jack Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Samuel Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Lewis Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Ernest Gray" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Mrs H.R. Bower (Gray)" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Mrs C. Lindsay (Gray)" />
                </Link>
                <Link to="/components/people/men/HenryGray">
                  <MenuItem primaryText="Mrs. C. Bryen (Gray)" />
                </Link>
              </Menu>
            </Popover>
          </div>
        </Card>
      </div>
    );
  }
}

export default Gray;
