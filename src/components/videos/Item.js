import React from 'react';
import { ListItem } from 'material-ui/List';

const Item = ({ video, onVideoSelect }) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <ListItem className="media" onClick={() => onVideoSelect(video)}>
      <div className="media-left">
        <img className="media-object" src={imageUrl} alt="{title}" />
      </div>
      <div>
        <h6>{snippet.title}</h6>
      </div>
      <hr />
    </ListItem>
  );
};

export default Item;
