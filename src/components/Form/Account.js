import React from 'react'
import './Acco.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

const Account = () => {
  return (
    <div>
       <div style={{
                backgroundImage:
                    "url('./AccountOpeningOffer.jpeg')", backgroundSize: "cover", backgroundPosition: "0px -230px",
                backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px"
            }} className='vbb bnvk'>

                <div className='overlay'>
                    <h1 className='contactfont' style={{fontSize:"40px"}}>Account Opening Offer</h1>
                </div>
            </div>
            <div className='con'>
            <CardGroup>
                <Card className="c4457" style={{ margin: "20px" }} >
                    <img className="m8988" variant="top" src="./Upstox-logo.png" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className='title126 text-center'>Upstox</p></Card.Title>
                        <p className='title127 text-center'>For Best Platform</p>
                        <p className='title128 text-center'>Refferal Code</p>
                        <p className='title129 text-center'>320709</p>
                        <p className='title1230 text-center'>(If Asked)</p>
                        <Row>
                                    <Col></Col>
                                    <Col xs={8}><Button variant="primary" className='btn589'>
                                        <a href='https://upstox.com/open-demat-account/?f=0P1J' className='title1231' style={{color:"black"}}>
                                            Open Account</a></Button></Col>
                                    <Col></Col>
                                </Row>
                      
                        
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
                <Card className="c4457" style={{ margin: "20px" }} >
                    <img className="m8988" variant="top" src="./Zerodha-logo.png" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className='title126 text-center'>Zerodha</p></Card.Title>
                        <p className='title127 text-center'>For Best Platform</p>
                        <p className='title128 text-center'>Refferal Code</p>
                        <p className='title129 text-center'>NZ8182</p>
                        <p className='title1230 text-center'>(If Asked)</p>
                        <Row>
                                    <Col></Col>
                                    <Col xs={8}><Button variant="primary" className='btn589'>
                                        <a href='https://zerodha.com/open-account?c=NZ8182' className='title1231' style={{color:"black"}}>
                                            Open Account</a></Button></Col>
                                    <Col></Col>
                                </Row>
                      
                        
                    </Card.Body>
                </Card>
            
            </CardGroup>
            </div>
    </div>
  )
}

export default Account
