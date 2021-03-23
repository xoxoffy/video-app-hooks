import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("");
  }, []);

  const onTermSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (clickedVideo) => {
    setSelectedVideo(clickedVideo);
  };

  return (
    <div className="App">
      <h1>
        <Container>
          <SearchBar onFormSubmit={onTermSubmit} />
        </Container>
        <Container>
          <Row>
            <Col>
              <VideoDetail video={selectedVideo} />
            </Col>
            <Col>
              <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </Col>
          </Row>
        </Container>
      </h1>
    </div>
  );
};

export default App;
