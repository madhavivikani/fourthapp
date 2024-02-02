import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../image/1.svg';
import Footer from '../ABOUT/Footer';
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";



function Gallery() {
    return (
        <div>
            <div className="menu g_menu border2">
                <Container className="border1">
                    <div className='top_blog'>
                        <p className='Diane text_line'>GALLERY PORTFOLIO</p>
                        <div className='right_b'>
                            <p><Link to="/home">Home</Link></p>
                            <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            <p>Gallery Portfolio</p>
                        </div>
                    </div>
                    <div className="inner_menu_h inner_two">
                        <div className="all_three">
                            <Row className="g-4">
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/port-list-img-4.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>COFFEE COCKTAIL</p>
                                                <p>Recipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-1.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>SHRIMP PASTA</p>
                                                <p>Main Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-2.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>BEEF STEAK</p>
                                                <p>Recipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-3.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>PUNCH PARTY</p>
                                                <p>Recipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-4.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>CHIKEN FILE</p>
                                                <p>Main Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-5.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>ITALIAN PASTA</p>
                                                <p>Recipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-6.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>NEW RECIPES</p>
                                                <p>Recipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-7.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>REFERECING DRINK</p>
                                                <p>Main Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <div className="first1">
                                        <div className="first_img g_firstimg">
                                            <img src={require('../image/Restaurant-home-img-8.jpg')} className="img"></img>
                                            <div className='img_text'>
                                                <p className='g_coffee'>CHERRY DESSERT</p>
                                                <p>Recipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Gallery;