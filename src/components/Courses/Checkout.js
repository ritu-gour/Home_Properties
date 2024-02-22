import React from 'react'
import { Container } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    return (
        <div>
            <div className='pro' style={{margin:"160px 50px 80px 50px"}}>
                <h3 className='pro1'>Checkout Form</h3>
                <Form>
                    <Row>

                        <Col>


                            <Card >
                                <div className='' style={{padding:"20px"}}>


                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>First name </Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Last name  </Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                    </Row>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Country / Region </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Town / City </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                        <Form.Label>Email</Form.Label>

                                        <Form.Control type="Email" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                        <Form.Label>Mobile No.</Form.Label>

                                        <Form.Control type="number" placeholder="" />
                                    </Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label="">
                                        <Form.Control
                                            as="textarea"
                                            placeholder=""
                                            style={{ height: '100px' }}
                                            className='mb-4' />
                                    </FloatingLabel>





                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card10'>
                                <Card.Body>
                                    <h5 className='mb-5'>Your Courses</h5>
                                    <Row>
                                        <Col>
                                            <p>Courses</p>
                                        </Col>
                                        <Col>
                                            <p style={{ float: "right" }}>Courses</p>

                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row>
                                        <Col>
                                            <p>Courses #1</p>
                                        </Col>
                                        <Col>
                                            <p style={{ float: "right" }}>₹20000</p>

                                        </Col>
                                    </Row>
                                    <hr></hr>

                                    <Row>
                                        <Col>
                                            <p>Subtotal</p>
                                        </Col>
                                        <Col>
                                            <p style={{ float: "right" }}>₹20000</p>

                                        </Col>
                                    </Row>
                                    <hr></hr>


                                    <Row>
                                        <Col>
                                            <p>Total</p>
                                        </Col>
                                        <Col>
                                            <p style={{ float: "right" }}>₹20000</p>

                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I would like to receive exclusive emails with discounts and product information" />
                                    </Form.Group>
                                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                    <Row>
                                        <Col></Col>
                                        <Col xs={12}><Button variant="primary" className='btn5'>Submit</Button></Col>
                                        <Col></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Checkout
