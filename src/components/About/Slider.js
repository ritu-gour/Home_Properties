import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'img/Slider.css'
const Slider = () => {
    return (

        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 r1 center"
                    src="img/user1.png"
                    alt="/"
                />


                <h5 className="bb text-center" style={{ ffontSize: "35px", fontFamily: "Italic" }}>Sonali Raut</h5>
                <p className="bb1 text-center" style={{ fontSize: "21px", fontFamily: "Italic" }}>A place where you will get proper guide and information about Share Market. </p>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 r1 center"
                    src="img/user2.png"
                    alt="/"
                />

                <h5 className="bb text-center" style={{ ffontSize: "35px", fontFamily: "Italic" }}>Lochana Gudekar</h5>
                <p className="bb1 text-center" style={{ fontSize: "21px", fontFamily: "Italic" }}> Satisfied with the service 👍keep it up. </p>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 r1 center"
                    src="img/user3.png"
                    alt="/"
                />

                <h5 className="bb text-center" style={{ ffontSize: "35px", fontFamily: "Italic" }}>Soham</h5>
                <p className="bb1 text-center" style={{ fontSize: "21px", fontFamily: "Italic" }}>Best experience.</p>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 r1 center"
                    src="img/user4.png"
                    alt="/"
                />

                <h5 className="bb text-center" style={{ ffontSize: "35px", fontFamily: "Italic" }}>Vaibhav Gaikwad</h5>
                <p className="bb1 text-center" style={{ fontSize: "21px", fontFamily: "Italic" }}>Awesome</p>

            </Carousel.Item>
        </Carousel>


    )
}

export default Slider

