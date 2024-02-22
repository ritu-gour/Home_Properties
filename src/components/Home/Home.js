import React, { useEffect } from 'react'
import Hero from "./Hero";
import './Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Aos from "aos";
import 'aos/dist/aos.css';
import Cards from './Cards'
import Banner from './Banner';
import Service from './Service';
import Card from 'react-bootstrap/Card';
import './Counters.css'
// import Button from 'react-bootstrap/Button';
const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>


      <Hero />
      <Banner />
      <Container >

        <h2 className='font1 text-center'>Online Certificate Service in Stock Market Trading</h2>

        <Row >
          <Col>
            <div >
              <img src='./who-are-we.gif' className='who1' data-aos="fade-up"
     data-aos-duration="2000"/>
            </div>
          </Col>
          <Col>

            <div className='section1' data-aos="fade-up"
     data-aos-duration="2000">

              <h2 className='font2 my-3'>Who Are We?</h2>
              <p className='p1 my-3'> was initiated with a mission of turning ordinary people into extraordinary traders by providing extensive knowledge in stock market trading.</p>
              TradeGuru
              <p className='p1 my-3'>We offer various Service in the field of stock trading to give end-to-end knowledge to people based on real-life situations, self-learning, experience, and theoretical implications with easy-to-understand examples in all our modules.</p>

              <p className='p1 my-3'>We have taken this initiative for beginners to professionals who are interested in making more money, willing to step forward, and attain financial freedom.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{
        backgroundImage:
          "url('./f-shape1.webp')", backgroundSize: "content", backgroundPosition: "right",



        backgroundRepeat: "no-repeat", padding: "0px 0px 100px 0px"
      }}>
        <Container className='con1'>
          <h2 className='font1 ' style={{ padding: "0px 0px 0px 30px" }}>Our Journey So Far</h2>
          <div data-aos="fade-up">
            <Cards />
          </div>
        </Container>

      </div>
      <Container >
        <div className='our-mission' >
          <Row>
            <Col className='col1'>
              <div className='mission1' style={{
                backgroundImage:
                  "url('./img6.png')", backgroundSize: "contain",
                margin: "20px",
                backgroundRepeat: "no-repeat"
              }} data-aos="zoom-in">
                <div className='bnv'>
                  <h2 className='font8' >Our Mission </h2>
                  <ul>
                    <li className='p90'>To make the Beginners and Retailers truly profitable traders over time</li>
                    <li className='p90'>Providing easy access to quality information to the masses</li>
                    <li className='p90'>Making trading hassle-free and enjoyable by providing topmost services</li>
                    <li className='p90'>Encourage people to trade by clearing the misunderstandings about tradinge</li>
                   
                  </ul>

                </div>


              </div>
            </Col>
            <Col className='col2'>
              <div className='mission' style={{
                backgroundImage:
                  "url('./img7.png')", backgroundSize: "contain",
                margin: "20px",
                backgroundRepeat: "no-repeat"
              }} data-aos="zoom-in">
                <div  className='bnv'>
                  <h2 className='font8' >Our Vision </h2>
                  <ul>
                    <li className='p90'>Our vision is to become the most preferred training institute in the stock market.</li>
                    <li className='p90'>We aim to help retailers and beginners to get higher returns on their investments, through a better understanding of the financial market.</li>
                    <li className='p90'>Providing real-time practical exposure to enhance their knowledge of the stock market and
                     help them achieve financial freedom.</li>

                  </ul>

                </div>


              </div>
            </Col>
          </Row>

        </div>



      </Container>
      <div style={{
        backgroundImage:
          "url('./pattern.png')", backgroundSize: "cover",

        backgroundRepeat: "no-repeat", padding: "0px 0px 100px 0px"
      }}  >


        <div>

          <div data-aos="fade-up-right">
            <Service />
          </div>

        </div>
      </div>

      <Container>
        <div className='div90 my-5 ' >
          <h2 className='font55 '>Why Chat Trade Guru academy?</h2>
          <Row>
            <Col>

              <img src='./img12.jpg' className='img12' data-aos="fade-up-right"/>
            </Col>
            <Col >
              <Card className='my-3 card1' data-aos="fade-up"
     data-aos-duration="1000">
                <Card.Body >
                  <Row>
                    <Col sm={2}>
                      <img src='./Learnanytimeanywhere.png' className='imgs1' />
                    </Col>
                    <Col sm={10}>
                      <h2 className='fonts1 my-2'>Learn anytime anywhere </h2>
                      <p className='fonts2'>Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <Card className='my card2' data-aos="fade-up"
     data-aos-duration="2000">
                <Card.Body >
                  <Row>
                    <Col sm={2}>
                      <img src='./World-classfaculty.png' className='imgs1' />
                    </Col>
                    <Col sm={10}>
                      <h2 className='fonts1 my-2'>World-class faculty </h2>
                      <p className='fonts2'>Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
              <Card className='my-3 card3' data-aos="fade-up"
     data-aos-duration="3000">
                <Card.Body >
                  <Row>
                    <Col sm={2}>
                      <img src='./Quiz&assignments.png' className='imgs1' />
                    </Col>
                    <Col sm={10}>
                      <h2 className='fonts1 my-2'>Quiz & assignments </h2>
                      <p className='fonts2'>Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </div>
      </Container>

    </div>
  )
}

export default Home
