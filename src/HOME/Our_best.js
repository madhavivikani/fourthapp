import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../image/1.svg';


function Our_best() {
    return (
        <div className='main_best'>
            <Container className='border1'>
                <div className='inner_best'>
                    <Row className=''>
                        <Col lg={6} sm={12}>
                            <div className='maggi_img'>
                                <img src={require('../image/2.jpg')} className='img'></img>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className='con_re'>
                                <p className='life'>Recommendations</p>
                                <div className='about_text'>
                                    <div className='cross_img'>
                                        <img src={img1}></img>
                                    </div>
                                    <div className='best_1'>
                                        <span className='t_about'>OUR BEST SPECIALTIES</span>
                                    </div>
                                    <div className='inner_best2'>
                                        <img src={img1}></img>
                                    </div>
                                </div>
                                <p className='r_lorem s_lorem'>Lorem ipsum dolor sit amet,consecte adipisicing eli sed do eiu sm od tempor incididunt ut abore et dolore mag aliqua.Ut enim ad minm eniam quis nostrud</p>
                                <div className='btn_v'>
                                    <p className='view'>VIEW ALL</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Our_best;