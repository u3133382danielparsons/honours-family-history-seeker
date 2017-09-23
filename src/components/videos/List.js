import React from 'react';
import Item from './Item';
import { List } from 'material-ui/List';

const VideoList = props => {
  return (
    <List className="media-list">
      {props.videos.map(video => {
        return (
          <Item
            onVideoSelect={props.onVideoSelect}
            video={video}
            key={video.etag}
          />
        );
      })}
    </List>
  );
};

export default VideoList;
