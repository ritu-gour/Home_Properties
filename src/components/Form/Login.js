
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Acco.css'
const Login = () => {

    return (
        <div>
            <div className='form1 bhf'>
                <h4 className='text-center'>Login</h4>
                <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Email</Form.Label>

                        <Form.Control type="Email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Password" />
                    </Form.Group>


                    <Row>
                        <Col></Col>
                        <Col xs={12}><Button variant="primary" className='btn5'>Login</Button></Col>
                        <Col></Col>
                    </Row>
                    <p className='my-3'>Don't have an account? <a href='/registration'>Signup</a></p>
                </Form>
            </div>
        </div>
    )
}

export default Login
