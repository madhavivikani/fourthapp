import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Testi_pic() {
    return (
        <div className='main_testi_pic'>
            <Container className='border1'>
                <div className='inner_tpic'>
                    <Row className=''>
                        <Col lg={6} sm={12}>
                            <div className='only_testy'>
                                <div className='colon'>
                                    <img src={require('../image/colon.png')}></img>
                                </div>
                                <OwlCarousel className='owl-theme' loop margin={10} nav items={1} autoplay>
                                    <div class='item'>
                                        <div className='one'>
                                            <p className='duis'> Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse. </p>
                                            <p className='t_name'>Andrea Chung</p>
                                            <p className='cook'>Cook</p>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div className='one'>
                                            <p className='duis'> Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse. </p>
                                            <p className='t_name'>Andrea Chung</p>
                                            <p className='cook'>Cook</p>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div className='one'>
                                            <p className='duis'> Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse. </p>
                                            <p className='t_name'>Andrea Chung</p>
                                            <p className='cook'>Cook</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </Col >
                        <Col lg={6} sm={12}>
                            <div className='t_pic'>
                                <img src={require('../image/testi_pic.jpg')} className='img'></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Testi_pic;