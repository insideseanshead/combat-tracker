import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q); 
  };

  return (
    
    <Form className="form-bg p-4">
      <div className="row">
        <div className="col-8 offset-2">
          <Form.Group className="m-0" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search Beastiary"
              value={text}
              onChange={(e) => onChange(e.target.value)}
              autofocus
            />
          </Form.Group>
        </div>
      </div>
    </Form>
  );
};

export default SearchBar;
