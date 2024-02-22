import React from 'react'
import './Service.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { RiArrowRightDoubleLine } from "react-icons/ri";
const Service = () => {
    return (
        <div>

       <Container>
       <div className='card47'>
           <Row >
            <Col>
              <h2 className='font56 ' >Check Our Services</h2>
            </Col>
            <Col>
              <Button className="custom-btn btn-7 btn89 mb-5" ><span >View More Services</span></Button>
            </Col>
          </Row>
           <CardGroup>
                <Card className="c44" style={{ margin: "20px" }} >
                    <a href='/courses4'> <Card.Img className="m899" variant="top" src="./img1.jpeg" /></a>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className=''><a href='/courses4' className='title12'>Traning of Share Market</a></p></Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>
                            <p className="price13">lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
                            </p>
                        </Card.Text>
                        <a href='' className='a22'>
                            Read More <RiArrowRightDoubleLine />
                        </a>
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
                <Card className="c44" style={{ margin: "20px" }} >
                    <a href='/courses5'> <Card.Img className="m899" variant="top" src="./img2.jpg" /></a>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className=''><a href='/courses5' className='title12 '>Portfolio Management</a></p></Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>
                        <p className="price13">lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
                            </p>
                        </Card.Text>
                        <a href='' className='a22'>
                            Read More <RiArrowRightDoubleLine />
                        </a>
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
                <Card className="c44" style={{ margin: "20px" }} >
                    <a href='/courses6'> <Card.Img className="m899" variant="top" src="./img3.webp" /></a>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                            <p className=''><a href='/courses6' className='title12 '>Investment in Market</a></p>

                        </Card.Title>
                        <Card.Text style={{ fontSize: "16px" }}>

                        <p className="price13">lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
                            </p>
                        </Card.Text>
                        <a href='' className='a22'>
                            Read More <RiArrowRightDoubleLine />
                        </a>
                    </Card.Body>
                    {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                </Card>
            </CardGroup>
           </div>
       </Container>












        </div>
    )
}


// const data = [
//     {

//         img: './img1.jpeg',
//         title: 'Traning of Share Market',
//         p: "Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
//         link: "https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/"

//     },
//     {
//         img: './img2.jpg',
//         title: 'Portfolio Management',
//         p: "Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
//         link: "https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/"
//     },

//     {
//         img: './img3.webp',
//         title: 'Investment in Market',
//         p: "Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying",
//         link: "https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/"
//     },




// ]
export default Service
