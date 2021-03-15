import React from "react";
import { Form } from "react-bootstrap";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Video Search</Form.Label>
            <Form.Control
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
