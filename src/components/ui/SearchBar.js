import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form className="form-bg p-4">
      <div className="row">
        <div className="col-10">
          <Form.Group className="m-0" controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Search Beastiary" />
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
