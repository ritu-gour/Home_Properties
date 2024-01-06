import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Cardss.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
import Aos from "aos";
import 'aos/dist/aos.css';
const About = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className='bg3' style={{
                backgroundImage:
                    "url('./m3.jpg')", backgroundSize: "cover",
                backgroundRepeat: "no-repeat", padding: "200px 0px 200px 0px"
            }}>
                <Container>

                    <Row>
                        <Col>
                            <h1 className='bcvv' style={{ fontSize: "80px", color: "blue", alignItems: "center", textAlign: "center", padding: "30px 0px 30px 0px" }}>About Us</h1>


                        </Col>

                    </Row>
                </Container>


            </div>
           
           
            <Container style={{ padding: "50px 0px 50px 0px" }}>
                <Row className='bs'>
                    <Col data-aos="flip-left"> <img src='./m2.jpg' alt='' width={600} className='my-5 m45' /></Col>
                    <Col> <p className='my-5 bv' style={{ fontSize: "16px", padding: "30px 0px 0px 0px" }}>lorem Some quick example text to build on the Lorem Ipsum and make up In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>
                        <Button variant="primary bv1" style={{ fontSize: "18px", fontFamily: "Italic" }}><a href='./contact' target="_blank" style={{ color: "white" }}>Contact Us</a></Button>
                    </Col>
                </Row>
                <CardGroup>
                    <Card className="c44" style={{ margin: "20px" }} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Card.Img className="m89" variant="top" src="./m2.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Lorem Ipsum</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="c44" style={{ margin: "20px" }} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Card.Img className="m89" variant="top" src="./m3.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Lorem Ipsum</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="c44" style={{ margin: "20px" }} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Card.Img className="m89" variant="top" src="./m4.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Lorem Ipsum</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </CardGroup>
            </Container>



        </div>
    )
}

export default About

