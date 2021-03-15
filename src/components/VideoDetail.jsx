import React from "react";
import { Alert, ResponsiveEmbed } from "react-bootstrap";

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading..</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <Alert variant="dark">
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe title="video player" src={videoSrc} />
        </ResponsiveEmbed>
      </Alert>
      <Alert variant="dark">
        <h1>{props.video.snippet.title}</h1>
        <h4>{props.video.snippet.description}</h4>
      </Alert>
    </div>
  );
};

export default VideoDetail;
