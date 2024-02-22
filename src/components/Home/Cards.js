import React from 'react'
import './Cards.css'


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Cards = () => {
    return (
        <div>
            <CardGroup>
                <Card className="c445" style={{ margin: "20px" }} >
                    <img className="m89" variant="top" src="./our Journey 1.png" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className='title12 text-center'>Our humble start</p></Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>
                            <p className="price13">Our mentor Mr. Mahesh Patil Sir started trading in the year 2003. In this year, we entered the world of trading and opened our first Demat Account.</p>

                        </Card.Text>
                        
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
                <Card className="c445" style={{ margin: "20px" }} >
                   <img className="m89" variant="top" src="./our Journey 2.png" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className='title12 text-center '>Learning and Training</p></Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>
                            <p className="price13">Soon In the time span of 6 years between 2004 to 2010, we took training and learning across the globe with high standard training.</p>

                        </Card.Text>
                        
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
                <Card className="c445" style={{ margin: "20px" }} >
                   <img className="m89" variant="top" src="./our Journey 3.png" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className='title12 text-center '>Started taking off</p>

                        </Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>

                            <p className="price13">In 2018, our mentor started guiding students at Chart Commando. As
                                the pandemic impacted in 2020, we began to explain people about stock trading, & launched multiple courses</p>
                        </Card.Text>
                       
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
                <Card className="c445" style={{ margin: "20px" }} >
                    <img className="m89" variant="top" src="./our Journey 4.png" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className='title12 text-center '>Successful in Inspiring millions</p>

                        </Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>

                            <p className="price13">We hit the success bars as we started functioning full-fledged via Youtube and Telegram channels. Currently, inspiring millions to be financially independent and start a career in trading.</p>
                        </Card.Text>
                       
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
            </CardGroup>

        </div>
    )
}



export default Cards
