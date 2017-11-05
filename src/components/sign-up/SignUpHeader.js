import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3',
    marginLeft: '0.39%'
  }
};

class SignUpHeader extends Component {
  render() {
    return (
      <header>
        <Subheader>FAMILY HISTORY SEEKER</Subheader>
        <object title="FAMILY HISTORY SEEKER SIGN UP PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z" />
          </svg>
        </object>
        <Subheader style={styles.subheaderColor}>SIGN UP</Subheader>
      </header>
    );
  }
}

export default SignUpHeader;
