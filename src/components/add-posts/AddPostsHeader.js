import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3',
    marginLeft: '0.39%'
  }
};

class AddPostsHeader extends Component {
  render() {
    return (
      <header>
        <Subheader>FAMILY HISTORY SEEKER</Subheader>
        <IconButton tooltip="FAMILY HISTORY SEEKER ADD POSTS PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z" />
          </svg>
        </IconButton>
        <Subheader style={styles.subheaderColor}>ADD POSTS</Subheader>
      </header>
    );
  }
}

export default AddPostsHeader;
