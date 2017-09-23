import React from 'react';
import { ListItem } from 'material-ui/List';

const Item = ({ video, onVideoSelect }) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <ListItem className="media" onClick={() => onVideoSelect(video)}>
      <div className="media-left">
        <button href="#">
          <img className="media-object" src={imageUrl} alt="{title}" />
        </button>
      </div>
      <div className="media-body">
        <h5 className="media-heading">{snippet.title}</h5>
      </div>
      <hr />
    </ListItem>
  );
};

export default Item;
