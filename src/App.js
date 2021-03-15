import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("");
  }

  onTermSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  //callback method to pass on as a prop down to the VideoList
  onVideoSelect = (clickedVideo) => {
    this.setState({ selectedVideo: clickedVideo });
  };

  render() {
    return (
      <div className="App">
        <h1>
          <Container>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </Container>
          <Container>
            <Row>
              <Col>
                <VideoDetail video={this.state.selectedVideo} />
              </Col>
              <Col>
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </Col>
            </Row>
          </Container>
        </h1>
      </div>
    );
  }
}

export default App;
