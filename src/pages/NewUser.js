import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";

const NewUser = () => {
    return (
        <div>
            <Form>
                <Form.Control
                    type='text'
                    name='username'
                    placeholder='Username'
                />
                <Form.Control
                    type='text'
                    name='email'
                    placeholder='Email'
                />
                <Form.Control
                    type='text'
                    name='password'
                    placeholder='Password'
                />
                <Button>
                    Create Encounter
                </Button>
            </Form>
        </div>
    )
}

export default NewUser
