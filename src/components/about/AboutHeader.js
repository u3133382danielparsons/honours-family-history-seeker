import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3'
  }
};

class AboutHeader extends Component {
  render() {
    return (
      <header>
        <IconButton tooltip="ABOUT FAMILY HISTORY SEEKER PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
          </svg>
        </IconButton>
        <Subheader style={styles.subheaderColor}>ABOUT</Subheader>
      </header>
    );
  }
}

export default AboutHeader;