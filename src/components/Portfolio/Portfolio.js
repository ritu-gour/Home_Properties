import React from 'react'
import 'img/Portfolio.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Container } from 'react-bootstrap';
// import Card1 from '.img/Courses/Coursescard';
const Portfolio = () => {
    return (
        <div>
            <div style={{
                backgroundImage:
                    "url('img/Portfolio.jpg')", backgroundSize: "cover", backgroundPosition: "0px -200px",
                backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px"
            }} className='vbb1'>

                <div className='overlay'>
                    <h1 className='contactfont'>Portfolio</h1>
                </div>
            </div>
            <Container >
                <div className='div8 ' >
                <h2 className='font1 text-center mb-5'>Check Our Portfolio</h2>
                    <div >
                        <Tabs>
                            <TabList className="tablist1">
                                <Tab >App</Tab>
                                <Tab>Card</Tab>
                                <Tab >Web</Tab>

                            </TabList>

                            <TabPanel>
                              <Row>
                                <Col></Col>
                                <Col>
                                <img src='img/portfolio/portfolio-1.jpg' width={350}/>
                             
                                </Col>
                                <Col>
                                <img src='img/portfolio/portfolio-3.jpg'width={350} />
                                </Col>
                                <Col></Col>
                              </Row>
                            </TabPanel>
                            <TabPanel>
                            <Row>
                            <Col></Col>
                                <Col>
                                <img src='img/portfolio/portfolio-2.jpg' width={350}/>
                             
                                </Col>
                                <Col>
                                <img src='img/portfolio/portfolio-4.jpg'width={350} />
                                </Col>
                                <Col></Col>
                              </Row>
                            </TabPanel>
                            <TabPanel>
                            <Row>
                            <Col></Col>
                                <Col>
                                <img src='img/portfolio/portfolio-5.jpg' width={350}/>
                             
                                </Col>
                                <Col>
                                <img src='img/portfolio/portfolio-6.jpg'width={350} />
                                </Col>
                                <Col></Col>
                              </Row>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Portfolio
