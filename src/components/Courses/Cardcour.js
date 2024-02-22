import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Courses.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
const Cardcour = () => {
    return (
        <div>
            <Container className='card543'>
                <CardGroup>
                    <Card className="c44" style={{ margin: "20px" }} >
                        <a href='/courses1'> <Card.Img className="m8934" variant="top" src="./course22.jpg" /></a>
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='text-center'><a href='/courses1' className='title12 text-center'>F&O Master Course</a></p></Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                <p className="price1"> ₹50000</p>
                            </Card.Text>
                            <p className="price12"> <a href='/courses1'  className='more'>More Detail</a></p>
                            <Row>
                                <Col></Col>
                                <Col xs={8}><Button variant="primary" className='btn5'><a href='/checkout' className='a45'>Buy Now</a></Button></Col>
                                <Col></Col>
                            </Row>
                        </Card.Body>

                    </Card>
                    <Card className="c44" style={{ margin: "20px" }} >
                        <a href='/courses2'> <Card.Img className="m8934" variant="top" src="./Course11.jpg" /></a>
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='text-center'><a href='/courses2' className='title12 text-center'>Forex Master Course</a></p></Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>
                                <p className="price1">₹50000</p>
                            </Card.Text>
                            <p className="price12"> <a href='/courses2'  className='more'>More Detail</a></p>
                            <Row>
                                <Col></Col>
                                <Col xs={8}><Button variant="primary" className='btn5'><a href='/checkout' className='a45'>Buy Now</a></Button></Col>
                                <Col></Col>
                            </Row>
                        </Card.Body>

                    </Card>
                    <Card className="c44" style={{ margin: "20px" }} >
                        <a href='/courses3'> <Card.Img className="m8934" variant="top" src="./Course33.jpeg" /></a>
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='text-center'><a href='/courses3' className='title12 text-center'>Equity Master Course</a></p>

                            </Card.Title>
                            <Card.Text style={{ fontSize: "16px" }}>

                                <p className="price1">₹15000</p>
                            </Card.Text>
                            <p className="price12"> <a href='/courses3'  className='more'>More Detail</a></p>
                            <Row>
                                <Col></Col>
                                <Col xs={8}><Button variant="primary" className='btn5'><a href='./checkout' className='a45'>Buy Now</a></Button></Col>
                                <Col></Col>
                            </Row>
                        </Card.Body>

                    </Card>
                </CardGroup>

            </Container>
        </div>
    )
}

export default Cardcour
