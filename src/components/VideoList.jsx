import React from "react";
import VideoItem from "./VideoItem";
import { ListGroup } from "react-bootstrap";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    //onVideoSelect passed down as props to VideoItem
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return <ListGroup>{renderedList}</ListGroup>;
};

export default VideoList;
