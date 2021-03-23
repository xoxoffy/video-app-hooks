import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(searchTerm);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Video Search</Form.Label>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
