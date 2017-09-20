import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  subheaderColor: {
    color: '#1fbcd3'
  }
};

class PostsHeader extends Component {
  render() {
    return (
      <header>
        <IconButton tooltip="POSTS PAGE">
          <svg
            fill="#1fbcd3"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-74 29h48v48h-48V29zM0 0h24v24H0V0zm0 0h24v24H0V0z"
              fill="none"
            />
            <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" />
          </svg>
        </IconButton>
        <Subheader style={styles.subheaderColor}>POSTS</Subheader>
      </header>
    );
  }
}

export default PostsHeader;
