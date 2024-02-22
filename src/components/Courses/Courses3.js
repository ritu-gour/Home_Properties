import React from 'react'
import { Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Product.css'
const Courses3 = () => {
    return (
        <div>
            <div className='pro' style={{margin:"160px 50px 90px 50px"}}>
                <Row>
                    <Col>
                        <div>
                            <img src='./Course33.jpeg' width={600} className='cour1'/>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h1>Equity Master Course</h1>
                            <p className="price2">15000/-</p>
                            <Button variant="primary" className='btn58'><a href='./checkout' className='a45'>View Cart</a></Button>
                            <p className='mt-5'>Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text
                                commonly used to demonstrate the visual form of a document or a typeface without
                                relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Courses3
