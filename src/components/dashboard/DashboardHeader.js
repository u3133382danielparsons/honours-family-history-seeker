import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3'
  }
};

class DashboardHeader extends Component {
  render() {
    return (
      <header>
        <Subheader>FAMILY HISTORY SEEKER</Subheader>
        <IconButton tooltip="FAMILY HISTORY SEEKER DASHBOARD PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
          </svg>
        </IconButton>
        <Subheader style={styles.subheaderColor}>DASHBOARD</Subheader>
      </header>
    );
  }
}

export default DashboardHeader;
