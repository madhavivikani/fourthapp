import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testi_a() {
    return (
        <div className='main_testi border2'>
            <Container className='border1'>
                <div className='inner_testi'>
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
            </Container>
        </div>
    );
}

export default Testi_a;