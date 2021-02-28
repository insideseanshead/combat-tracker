import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  const [text, setText] = useState('');

  return (
    <Form className="form-bg p-4">
      <div className="row">
        <div className="col-10">
          <Form.Group className="m-0" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search Beastiary" value={text} onChange={(e)=> setText(e.target.value)} autofocus />
          </Form.Group>
        </div>
        <div className="col-2">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </div>
    </Form>
  );
};

export default SearchBar;
