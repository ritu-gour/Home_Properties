import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Cardss.css'
const Contact = () => {
  return (
    <div>
       <div className='bg33' style={{
                backgroundImage:
                    "url('./m4.jpg')", backgroundSize: "cover",
                backgroundRepeat: "no-repeat", padding: "60px 0px 60px 0px"
            }}>
                <Container>

                    <Row>
                        <Col>
                         <h1   style={{fontSize:"40px",color:"white",alignItems:"center",textAlign:"center",padding:"30px 0px 40px 0px"}}>Contact Us</h1>
                            <Form style={{ margin: "0px 270px 0px 270px" }} className='byn'>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label style={{ fontSize: "17px" }} >Email</Form.Label>
                                        <Form.Control style={{ fontSize: "15px" }} type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label style={{ fontSize: "17px" }} >Password</Form.Label>
                                        <Form.Control style={{ fontSize: "15px" }} type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label style={{ fontSize: "17px" }}>Address</Form.Label>
                                    <Form.Control style={{ fontSize: "15px" }} placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label style={{ fontSize: "17px" }}>Address 2</Form.Label>
                                    <Form.Control style={{ fontSize: "15px" }} placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label style={{ fontSize: "17px" }}>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label style={{ fontSize: "17px" }}>State</Form.Label>
                                        <Form.Select style={{ fontSize: "15px" }} defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Web Dev.</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label style={{ fontSize: "17px" }}>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check style={{ fontSize: "15px" }} type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="primary" style={{ fontSize: "15px" }} type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>

                    </Row>
                </Container>


            </div>
    </div>
  )
}

export default Contact
