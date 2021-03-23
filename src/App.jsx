import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // setSelectedVideo(response.data.items[0]);

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
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </Col>
          </Row>
        </Container>
      </h1>
    </div>
  );
};

export default App;
