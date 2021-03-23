import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Container, Row, Col } from "react-bootstrap";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="App">
      <h1>
        <Container>
          <SearchBar onFormSubmit={search} />
        </Container>
        <Container>
          <Row>
            <Col>
              <VideoDetail video={selectedVideo} />
            </Col>
            <Col>
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </Col>
          </Row>
        </Container>
      </h1>
    </div>
  );
};

export default App;
