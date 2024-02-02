import React from 'react';
import img1 from '../image/1.svg';
import one1 from '../image/one1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import design from '../image/design_1.svg';

function Story() {
    return (
        <div className='resturant'>
            <Container className='border1'>
                <div className='inner_res'>
                    <p className='life'>Our Story</p>
                    <div className='about_text'>
                        <div>
                            <img src={img1}></img>
                        </div>
                        <div>
                            <p className='t_about'>ABOUT US</p>
                        </div>
                        <div>
                            <img src={img1}></img>
                        </div>
                    </div>
                    <p className='r_lorem s_lorem'>Lorem ipsum dolor sit amet,consecte adipisicing eli sed do eiu sm <br></br>od tempor incididunt ut abore et dolore mag aliqua.Ut enim ad <br></br>minm eniam quis nostrud</p>
                    <Row className='g-4'>
                        <Col lg={4}>
                            <div>
                                <img src={one1} className='img'></img>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='design_img'>
                                <img src={design} className='img'></img>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='two'>
                                <img src={require('../image/two2.jpg')} className='img'></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Story;