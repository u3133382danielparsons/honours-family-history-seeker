import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3',
    marginLeft: '0.39%'
  }
};

class VideosHeader extends Component {
  render() {
    return (
      <header>
        <Subheader>FAMILY HISTORY SEEKER</Subheader>
        <object title="FAMILY HISTORY SEEKER VIDEOS PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
          </svg>
        </object>
        <Subheader style={styles.subheaderColor}>VIDEOS</Subheader>
      </header>
    );
  }
}

export default VideosHeader;
