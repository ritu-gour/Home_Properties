import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Cardss.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Aos from "aos";
import 'aos/dist/aos.css';
const Blog = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <div className='bg3' style={{
                backgroundImage:
                    "url('./m4.jpg')", backgroundSize: "cover",
                backgroundRepeat: "no-repeat", padding: "200px 0px 200px 0px"
            }}>
                <Container>

                    <Row>
                        <Col>
                            <h1 className='bcvv'  style={{ fontSize: "80px", color: "blue", alignItems: "center", textAlign: "center", padding: "30px 0px 30px 0px" 
                        }}>Blog</h1>


                        </Col>

                    </Row>
                </Container>


            </div>

            <Container style={{ padding: "50px 0px 50px 0px" }}>

                <CardGroup>
                    <Card className="c44" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  style={{ margin: "20px" }}>
                        <Card.Img className="m89" variant="top" src="./m2.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Blog One</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                            This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Read More</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="c44" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  style={{ margin: "20px" }}>
                        <Card.Img className="m89" variant="top" src="./m3.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Blog Two</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                            This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Read More</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="c44" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  style={{ margin: "20px" }}>
                        <Card.Img className="m89" variant="top" src="./m4.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Blog Three</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                                </Card.Text>
                                <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Read More</Button>
                        
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </CardGroup>
                <CardGroup>
               
                    <Card className="c44" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  style={{ margin: "20px" }}>
                        <Card.Img className="m89" variant="top" src="./im1.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Blog One</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                            This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Read More</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="c44" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  style={{ margin: "20px" }}>
                        <Card.Img className="m89" variant="top" src="./im2.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Blog Two</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                            This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Read More</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="c44" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  style={{ margin: "20px" }}>
                        <Card.Img className="m89" variant="top" src="./m4.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>Blog Three</Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                                </Card.Text>
                                <Button variant="primary" style={{ fontSize: "18px", fontFamily: "Italic" }}>Read More</Button>
                        
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

export default Blog

