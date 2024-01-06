import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Hero.css'
const Hero = () => {
    return (
       
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 r1"
            src="./r1.png"
            alt="First slide"
          />
          <Carousel.Caption>
           <h5 className="bb" style={{ fontSize: "50px",fontFamily:"Italic" ,color:"white"}}>First slide label</h5>
            <p className="bb1" style={{ fontSize: "30px",fontFamily:"Italic", color:"white"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 r1"
            src="./r2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
         <h5 className="bb" style={{ fontSize: "50px",fontFamily:"Italic" ,color:"white"}}>First slide label</h5>
            <p className="bb1" style={{ fontSize: "30px",fontFamily:"Italic", color:"white"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 r1"
            src="./r3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
         <h5 className="bb" style={{ fontSize: "50px",fontFamily:"Italic" ,color:"white"}}>First slide label</h5>
            <p className="bb1" style={{ fontSize: "30px",fontFamily:"Italic", color:"white"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Hero
