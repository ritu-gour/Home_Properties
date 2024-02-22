import React from 'react'
// import 'react-tabs/style/react-tabs.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {Container } from 'react-bootstrap';

import Cardcour from './Cardcour';
const Courses = () => {
    return (
        <div>
            <div style={{
                backgroundImage:
                    "url('./courses.jpg')", backgroundSize: "cover", backgroundPosition: "0px -200px",
                backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px"
            }} className='vbb bn1'>

                <div className='overlay99'>
                    <h1 className='contactfont'>Courses</h1>
                </div>
            </div>
            <Container className='card098'>
                <div className='div87 ' >
                <h1 className='details78 text-center mb-5'>Check Our Courses</h1>
                   
                </div>
               
                    <Cardcour />
                    
            </Container>
        </div>
    )
}

export default Courses



