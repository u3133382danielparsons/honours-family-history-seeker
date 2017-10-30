import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3',
    marginLeft: '0.39%'
  }
};

class ArticlesListHeader extends Component {
  render() {
    return (
      <header>
        <Subheader>FAMILY HISTORY SEEKER</Subheader>
        <object title="FAMILY HISTORY SEEKER ARTICLES LIST PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </object>
        <Subheader style={styles.subheaderColor}>ARTICLES LIST</Subheader>
      </header>
    );
  }
}

export default ArticlesListHeader;
