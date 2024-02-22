import React from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
const Contact = () => {
    return (
        <div>
            <div style={{
                backgroundImage:
                    "url('./contactus.webp')", backgroundSize: "cover", backgroundPosition: "0px -230px",
                backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px"
            }} className='vbb contacts'>

                <div className='overlay'>
                    <h1 className='contactfont'>Contact Us</h1>
                </div>
            </div>

            <Container className='bcv'>
                <Row>
                    <Col>
                        <div className='details1'>
                            <h4 className='info1'>
                                Contact Info
                            </h4>

                            <h5 className='mb-3' > <FaPhoneSquareAlt className='fab' /> <span className='num1'>8779961039</span></h5>
                            <h5 className='mb-3'> <MdMarkEmailUnread className='fab' /> <span className='num1'>tradeguruteam1@gmail.com</span></h5>
                            <h5 className='mb-4' ><FaAddressCard className='fab' />
                                <span className='num2' style={{ fontSize: "17px", color: "#1a2563" }}>   C-49, Near Janta Market, Sector-4, Airoli, Navi Mumbai -400708
                                </span></h5>



                          
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.968017062086!2d72.99482307497935!3d19.152877232067638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf527119ee4b%3A0x492127478d58d415!2sSector%204%2C%20Airoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400708!5e0!3m2!1sen!2sin!4v1705155052568!5m2!1sen!2sin" 
                            width="100%" height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                         
                        </div>
                    </Col>
                    <Col>

                        <div className='form1 fo'>
                            <h3 className='text-center get1'>Get In Touch With Us</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Label>Email</Form.Label>

                                    <Form.Control type="Email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Label>Mobile No.</Form.Label>

                                    <Form.Control type="number" placeholder="Mobile No." />
                                </Form.Group>
                                <Form.Label>Message</Form.Label>
                                <FloatingLabel controlId="floatingTextarea2" label="Message">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Message"
                                        style={{ height: '100px' }}
                                        className='mb-4' />
                                </FloatingLabel>

                                <Row>
                                    <Col></Col>
                                    <Col xs={12}><Button variant="primary" className='btn5'>Submit</Button></Col>
                                    <Col></Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Contact
