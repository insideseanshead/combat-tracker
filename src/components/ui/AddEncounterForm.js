import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";

const AddEncounterForm = (props) => {
    return (
        <div>
            <Form>
                <Form.Control
                    type='text'
                    name='name'
                    placeholder='new encounter name'
                />
                <Button>
                    Create Encounter
                </Button>
            </Form>
        </div>
    )
}

export default AddEncounterForm
