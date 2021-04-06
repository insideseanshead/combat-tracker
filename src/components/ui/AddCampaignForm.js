import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddCampaignForm = (props) => {
  return (
    <div>
       <Form 
    //    onSubmit={props.formSubmit}
       >
            <Form.Group>
              <Form.Control
                name='name'
                // onChange={props.handleInputChange}
                // value={props.campaignName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="hidden"
                // value={props.profile.id}
              />
            </Form.Group>
            <Button variant="primary" type="submit" value="add campaign">
              Create Campaign
            </Button>
          </Form>
    </div>
  );
};

export default AddCampaignForm;
