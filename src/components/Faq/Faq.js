import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'
const Faq = () => {
    return (
        <div>
            <div style={{
                backgroundImage:
                    "url('./contactus.webp')", backgroundSize: "cover", backgroundPosition: "0px -230px",
                backgroundRepeat: "no-repeat", padding: "0px 0px 0px 0px"
            }}className='vbb faqs'>

                <div className='overlay'>
                    <h1 className='contactfont'>FAQs</h1>
                </div>
            </div>
            <div className='bg899'>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >How do I get started?
                            </Accordion.Header>
                            <Accordion.Body>
                                Getting started with the TradeGuru System is quite easy. The Implementation section of the "Our Service"
                                page provides a succinct step by step starter guide.          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> Do you have a Referral Program?</Accordion.Header>
                            <Accordion.Body>

                                Yes, we do! You can refer any friend, relative or colleague and we reward you for each new subscriber
                                with 1 month free subscription. You can refer as many people as you like, and will keep receiving a free
                                subscription month for every one that subscribes and remains a subscriber for at least 30 days. Some
                                creative subscribers even post their referral URL in online chat rooms, forums, newsgroups, etc. to get
                                credit.
                                For all the details on our Referral Program visit the "Referrals" page after you log in.            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> Do you select industry sectors?</Accordion.Header>
                            <Accordion.Body>

                                While our System has no sector preferences, it tends to favor the best companies in areas that
                                outperform the rest of the market.              </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> How long does the average trade last?</Accordion.Header>
                            <Accordion.Body>
                                The "Average Periodic Turnover" is around 45% for the 4 week cycle, so some trades will last 4-weeks
                                while others can span over several cycles.
                                The average position duration is about 60 days.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header> I am not a Day Trader, can I still use TradeGuru?</Accordion.Header>
                            <Accordion.Body>
                                Even if the TradeGuru system focuses on individual stocks, unlike day trading the length of our trades
                                has been averaging 60 days, and unlike swing trading, we do not try to identify stocks in trading ranges
                                and we do not play short-term overbought/oversold indicators. Instead we identify good profitable
                                businesses which are growing and offer good value, based on fundamental criteria.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </div>
    )
}

export default Faq
