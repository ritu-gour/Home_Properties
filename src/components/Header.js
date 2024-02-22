
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegCircleUser } from "react-icons/fa6";

import { AiFillCalendar } from "react-icons/ai";
// import { Button } from "react-bootstrap";
// import "./Navbar.css"
import { NavLink } from "react-router-dom";


import './Header.css'
const Header = () => {
   
    return (
        <div>
            <Navbar bg="white" expand="md" className='fixed-top navu9' style={{ height: "80px", color: "black" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none  mx-3" style={{fontSize: "34px", fontFamily: "Italic" }}>
                        <img src="./Trade_Guru_academy.png" className="imglogo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-white"  >
                        <Nav className="me-auto nav-links" >
                            <NavLink to="/" className="text-decoration-none  mx-3 n1">Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none  mx-3 n1">About</NavLink>
                            <NavLink to="/portfolio" className="text-decoration-none  mx-3 n1">Portfolio</NavLink>
                            <NavLink to="/courses" className="text-decoration-none  mx-3 n1"> Courses</NavLink>
                            <NavLink to="/faq" className="text-decoration-none  mx-3 n1"> FAQs</NavLink>
                            <NavLink to="/contact" className="text-decoration-none  mx-3 n1">Contact</NavLink>

                            <NavLink to="/account" className="text-decoration-none  mx-3 btn9 n1">New DMAT Account <AiFillCalendar className="icon4" /></NavLink>
                            <NavLink to='/Login' className="text-decoration-none  mx-3 btn900 n1" >Login <FaRegCircleUser className="icon4" /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
           
        </div>
    )
}

export default Header
