
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import './Banner.css'

const Banner = () => {
   
    return (
        <div>
            <Container >
                <Row>
                    <Col>
                    </Col>
                    <Col>

                        <div className='section3' style={{background:"white"}}>

                            <h2 className='font3 my'>LEARN STRATEGIES TO HELP YOU INVEST WITH CONFIDENCE, LIKE THE PROS</h2>
                            <p className='p1 my-3 pfg'>Get started with a free intro class.</p>
                            
                            <Button className="custom-btn8 btn-8" >
                                <a className="custom-btn8 btn-8" href='/registration' style={{color:"white"}}>REGISTER NOW</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>           

        </div>
    )
}

export default Banner
