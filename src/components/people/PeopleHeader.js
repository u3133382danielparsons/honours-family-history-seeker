import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3'
  }
};

class PeopleHeader extends Component {
  render() {
    return (
      <header>
        <IconButton tooltip="PEOPLE PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <Subheader style={styles.subheaderColor}>PEOPLE</Subheader>
        </IconButton>
      </header>
    );
  }
}

export default PeopleHeader;
