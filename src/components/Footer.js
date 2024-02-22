import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";

import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">

          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="ccol-xl-5 col-lg-5 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-logo">

                    <a href="index.html"><img src="./Trade_Guru_academy.png" className="img-fluid1" alt="logo" /></a>
                    <p style={{ padding: "20px 70px 0px 2px", color: "white", fontSize: "15px" }}>was initiated with a mission of turning ordinary people into extraordinary traders by providing extensive knowledge in stock market trading. </p>



                  </div>


                </div>
              </div>
              <div className="ccol-xl-2 col-lg-2  mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>




              

                    <li><a href="https://www.tradeguruacademy.net/">Home</a></li>
                    <li><a href="https://www.tradeguruacademy.net/about">About</a></li>
                    <li><a href="https://www.tradeguruacademy.net/Portfolio">Portfolio</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="ccol-xl-2 col-lg-2 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>LEGAL</h3>
                  </div>
                  <ul>
                    <li><a href="/Privacypolicy">Privacy Policy
                    </a></li>
                    <li><a href="/termsofuse">Terms Of Use
                    </a></li>
                    <li><a href="/refundpolicy">Refund Policy
                    </a></li>
                   

                  </ul>
                </div>
              </div>
              <div className="ccol-xl-3 col-lg-3 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Contact Info</h3>
                  </div>
                  <ul>
                    <li className='my-2'><a href="#">8779961039</a></li>
                    <li><a href="#">tradeguruteam1@gmail.com</a></li>
                    <li ><a
                      href="#"
                      target="_thapa">
                      <FaFacebookSquare className="facebook bu" />
                    </a>
                      <FaInstagramSquare className="instagram bu" />
                      <FaLinkedin className="Linkedin bu" />
                      <FaYoutubeSquare className="youtube bu" />
                    </li>


                  </ul>
                </div>
              </div>


            </div>
          </div>
          <hr className='bor1' />
        </div>
        <div className="copyright-area">
          <div className="container">



            <div className="copyright-text">
              <p className='text-center'>Copyright © 1998 - 2024 Trade Guru Academy</p>
            </div>





          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
