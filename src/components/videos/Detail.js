import React from 'react';

const Detail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  let videoId = video.id.videoId;
  let url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Family History Seeker"
        className="embed-responsive-item"
        src={url}
        allowfullscreen
      />
    </div>
  );
};

export default Detail;
