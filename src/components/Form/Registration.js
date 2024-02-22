import React from 'react'



import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Acco.css'
import Form from 'react-bootstrap/Form';

const Registration = () => {
  return (
    <div>
      

       <div className='form1 fora'>
        <h4 className='text-center mb-4'>Registration Form</h4>
       <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Label>Email</Form.Label>

            <Form.Control type="Email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Label>Mobile No.</Form.Label>

            <Form.Control type="number" placeholder="Mobile No." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>
         
          
          <Row>
            <Col></Col>
            <Col xs={12}><Button variant="primary" className='btn5'> Signup</Button></Col>
            <Col></Col>
          </Row>
          <p className='my-3'>Already have an account? <a href='/login'>Login</a></p>
        </Form>
       </div>
      </div>
   
  )
}

export default Registration
