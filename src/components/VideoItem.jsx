import "./VideoItem.css";
import React from "react";
import { Container, Image, ListGroup } from "react-bootstrap";

const VideoItem = (props) => {
  return (
    <ListGroup.Item
      //whenever user clicks on a VideoItem, we invoke that callback to the app component
      onClick={() => props.onVideoSelect(props.video)}
      className="video-item"
    >
      <Container>
        <Image
          alt={props.video.snippet.title}
          src={props.video.snippet.thumbnails.medium.url}
        />{" "}
      </Container>
      <Container>{props.video.snippet.title}</Container>
    </ListGroup.Item>
  );
};

export default VideoItem;
