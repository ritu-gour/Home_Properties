import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';
import './Cardss.css'
import Aos from "aos";
import 'aos/dist/aos.css';
const Cardss = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>


         



            <Container style={{ padding: "50px 0px 50px 0px" }}>
                <Row className='bs'>
                    <Col data-aos="fade-right"> <img src='./m2.jpg' alt='' width={600} className='my-5 m45' /></Col>
                    <Col> <p className='my-5 bv' style={{ fontSize: "16px", padding: "30px 0px 0px 0px" }}>lorem Some quick example text to build on the Lorem Ipsum and make up In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>
                        <Button variant="primary" className='bv1' style={{ fontSize: "18px", fontFamily: "Italic" }}><a href='./contact' target="_blank" style={{ color: "white" }}>Contact Us</a></Button>
                    </Col>
                </Row>
                <CardGroup>
                    <Card className="c44" style={{margin:"20px"}} data-aos="fade-up"
     data-aos-duration="1000">
                        <Card.Img className="m89" variant="top" src="./m2.jpg" />
                        <Card.Body>
                            <Card.Title style={{fontSize:"26px",color:"blue"}}>Lorem Ipsum</Card.Title>
                            <Card.Text style={{fontSize:"16px"}}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                          <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Go somewhere</Button>
                    </Card>
                    <Card className="c44" style={{margin:"20px"}} data-aos="fade-up"
     data-aos-duration="2000">
                        <Card.Img className="m89" variant="top" src="./m3.jpg" />
                        <Card.Body>
                            <Card.Title style={{fontSize:"26px",color:"blue"}}>Lorem Ipsum</Card.Title>
                            <Card.Text style={{fontSize:"16px"}}>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                           
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                          <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Go somewhere</Button>
                    </Card>
                    <Card className="c44" style={{margin:"20px"}} data-aos="fade-up"
     data-aos-duration="3000">
                        <Card.Img className="m89" variant="top" src="./m4.jpg" />
                        <Card.Body>
                            <Card.Title style={{fontSize:"26px",color:"blue"}}>Lorem Ipsum</Card.Title>
                            <Card.Text style={{fontSize:"16px"}}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                          <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Go somewhere</Button>
                    </Card>
                </CardGroup>
            </Container>
          


            <div className='bg3' style={{
                backgroundImage:
                    "url('./m4.jpg')", backgroundSize: "cover",
                backgroundRepeat: "no-repeat", padding: "60px 0px 60px 0px"
            }}>
                <Container>

                    <Row>
                        <Col>

                            <Form style={{ margin: "0px 270px 0px 270px" }} className='byn' data-aos="zoom-in">
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

export default Cardss
