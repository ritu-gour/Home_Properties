import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './card1.css'

import Aos from "aos";
import 'aos/dist/aos.css';
import Card from 'react-bootstrap/Card';
const Card1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='w-3/4 m-auto bh7'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                          <Card style={{ width: '20rem' }} className='card4 n9'  data-aos="fade-up">
                          <Card.Img variant="top" src={d.img} className='itemt'/>
                          <Card.Body>
                              <Card.Title style={{fontSize: "30px",fontFamily:"Italic",textAlign:"center"}}>{d.title}</Card.Title>
                              <Card.Text style={{fontSize: "13px",fontFamily:"Italic",textAlign:"center",padding:"0px 40px 0px 40px"}}>
                                 {d.p}
                              </Card.Text>
                              <Button variant="primary" className='itemt1' style={{fontSize: "18px",fontFamily:"Italic" }}>Go somewhere</Button>
                          </Card.Body>
                      </Card>
                    ))}
                </Slider>
            </div>

        </div>
    )
}


const data = [
    {
        name: 'ritu',
        title: 'lorem ipsum',
        img: '/images (1).png',
        p: 'lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'

    },
    {
        name: 'ritu1',
        title: 'lorem ipsum',
        img: '/images (1).png',
        p: 'lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'

    },
    {
        name: 'ritu2',
        title: 'lorem ipsum',
        img: '/images (1).png',
        p: 'lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'

    },
    {
        name: 'ritu3',
        title: 'lorem ipsum',
        img: '/images (1).png',
        p: 'lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'
    },
    {
        name: 'ritu4',
        title: 'lorem ipsum',
        img: '/images (1).png',
        p: 'lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'
    },
    {
        name: 'ritu5',
        title: 'lorem ipsum',
        img: '/images (1).png',
        p: 'lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'
    },

]
export default Card1
