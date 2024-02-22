import React from 'react'
import './About.css'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { PiPhoneCallBold } from "react-icons/pi";
// import Slider from './Slider'
const About = () => {
  return (
    <div>
      <div style={{
        backgroundImage:
          "url('./About_banners.jpg')", backgroundSize: "cover", backgroundPosition: "0px -150px",
        backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px" 
      }} className='vbb'>

        <div className='overlay'>
          <h1 className='contactfont'>About Us</h1>
        </div>
      </div>



      <div className='founder2'>
        <Container >
          <Row>
            <Col>

              <img style={{ height: "80%", width: "80%", border: "5px solid #1a2563", borderRadius: "10px" }} className="ms-3 nm"
                src="founder.jpg" />


            </Col>
            <Col className='foundersec'>


              <div className='founderp'>
                <h1 className='santos'>Santosh Mahajan (Founder)</h1>
                <p className='fontfounder'>Trade Guru is a website intended to help people understand the share market better.
                  At TradeGuru, we strive to provide you with the best share market information and resources to enhance
                  your trading journey.
                </p>

                <Button variant="" className='btn55'><PiPhoneCallBold className='icon2' /> <a href="tel:8779961039" style={{ color: "white" }}>
                  Call Us Now 8779961039</a></Button>

              </div>


            </Col>
          </Row>
        </Container>
      </div>
      <div className='founder22'>
        <Container >
          <Row>
            <Col>
              <div class="counter1"> +</div>
              <p className='fontp'>Happy Clients</p>
              {/* <a href="#">Find out more »</a> */}
            </Col>
            <Col>
              <div class="counter2"> +</div>
              <p className='fontp'>Projects</p>
            </Col>
            <Col>
              <div class="counter3"> +</div>
              <p className='fontp'>Hours Of Support</p>
            </Col>
            <Col>
              <div class="counter4"> +</div>
              <p className='fontp'>Hard Workers</p>
            </Col>

          </Row>
        </Container>
      </div>




      <div className='founder24'>
        <Container  >

          <Row>

            <Col className='foundersection'>


              <div className=''>
                <h1 className='whoare'>Who Are We? </h1>
                <p className='fontfounder1 mb-2'>Trade Guru Academy was founded in 2018 to educate people
                  about the intricacies of stock market trading through various stock trading courses.
                  We seek to provide individuals with end-to-end information based on real-life circumstances,
                  self-learning, experience, and theoretical implications with simple examples in all of our programmes.   </p>

                <p className='fontfounder1 mb-2'> Trade Guru Academy is trying to assist merchants and novices earn more significant returns on
                  their investments by improving their grasp of the financial market and eventually turning
                  them into highly lucrative traders.</p>

                <p className='fontfounder1 mb-2'> The assumption that "trading = gambling" is incorrect, and we intend to dispel
                  it via our extensive education on trading and its complexity, as well as by
                  encouraging people to trade by clearing up their misunderstandings.   </p>

                <p className='fontfounder1 mb-2'> Trade Guru Academy ensures that you can study at your speed from some of the most
                  renowned professors who give an in-depth explanation of the subject via our easy-to-use Android & iOS App.   </p>

                <p className='fontfounder1 mb-2'>You can also revisit ideas by taking chapter-by-chapter quizzes and completing assignments.
                  Students will also gain real-world experience with 365-day assistance from our 3C Community.
                  The courses are updated with the latest industry knowledge, and you can keep up to date with the
                  program whenever the course content is changed by using our app.   </p>




              </div>


            </Col>

            <Col>


              <div className='imgsect1'>
                <img style={{ height: "95%", width: "100%", borderRadius: "10px", margin: "75px 0px 0px -400px" }} className="ms-3 bkh"
                  src="who__are_we.jpg" />




              </div>


            </Col>
          </Row>
        </Container>
      </div>


      <div className='founder2'>
        <Container >



          <div className='founderp'>

            <h1 className='santos'>Trade Guru  <img src='./leadingbusinesses.png' width={90} /></h1>
            <p className='fontfounder22'>Trade Guru is one of the leading businesses in the Online Training Institutes For Stock Market. Also
              known for Online Training Institutes For Stock Market, Institutes For Stock Market. Find Address,
              Contact Number, Reviews &amp; Ratings, Photos, Maps of Trade Guru.
            </p>

            <Button variant="" className='btn55'><PiPhoneCallBold className='icon2' /> <a href="tel:8779961039" style={{ color: "white" }}>
              Call Us Today’s Now</a></Button>
            <Row>
              <Col>

              </Col>
              <Col>
                <img src='./ourcommitment.png' className='imgo mb-5' />
              </Col>
            </Row>

          </div>




        </Container>
      </div>


      <div className='founder23' style={{
        backgroundImage:
          "url('./banner.webp')", backgroundSize: "cover", backgroundPosition: "0px 0px",
        backgroundRepeat: "no-repeat"
      }}>
        <div className='overlay1'>

        <Row  >
          <Col>

            <img style={{ height: "530px", width: "100%", border: "5px solid #1a2563", borderRadius: "10px" }} className="ms-"
              src="faq.jpg" />


          </Col>
          <Col className='foundersec'>


            <div className='founderp256' style={{ padding: "" }}>
             <h1 className='fontfounder222'><img src='./Whatdo.jpg' width={70} className='imk'/> What do I get as part of the service?</h1>
                
                    <p className='fontfounder22 mt-2'>Once a subscriber, you can log in to the site at anytime and check the latest content of the
                    TradeGuru.</p>
                    <p className='fontfounder22'> TradeGuru also publishes a short Weekly Commentary after the close of the market on Fridays.</p>
                  
                 <h1 className='fontfounder222'><img src='./mony.png' width={70} className='imk'/> How much money do I need to get started? </h1>
               
                
                  <p className='fontfounder22 mt-2'>  There is no minimum, but in order to keep the subscription fee to no more than 1%, an amount of
                      at least $50,000 would be justified (we used the $499.95 Yearly fee). On the other hand, a 2.5%
                      gain on a $20,000 portfolio pays for the fee, and we would expect higher gains in any typical
                      year. </p>
                 

            </div>


          </Col>
        </Row>
        </div>
      </div>
      <div className='bg788'>
        <Container>
          <h1 className='test'>
          Testimonials
          </h1>
        {/* <Slider/> */}
        </Container>
      </div>
    </div >




  )
}

export default About
