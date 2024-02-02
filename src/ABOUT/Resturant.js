import '../App.css';
import img1 from '../image/1.svg';
import round from '../image/round.svg';
import { Container, Row, Col } from 'react-bootstrap';


function Resturant() {
    return (
        <div className='resturant'>
            <Container className='border1'>
                <div className='inner_res'>
                    <p className='life'>Restaurant life</p>
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
                    <Row className='text-center g-5'>
                        <Col lg={12} xl={4}>
                            <div className='round_img'>
                                <img src={round}></img>
                            </div>
                        </Col>
                        <Col lg={12} xl={4}>
                            <div>
                                <p className='r_lorem'>
                                    Lorem ipsum dolor sit amet, consecte turn se adipisicing elit, sed do eiusmod tempor ens incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci reprehenderit in voluptate velit esse cillu sint occaecat error sit volu.
                                </p>
                                <p className='r_lorem'>
                                    Cupidatat non proident, sunt in culpa qui cia deserunt mollit anim id est laborum. Sed utsa tat monullamco laboris nisi ut aliquip exe ne com odoconsequat. Duis aute irure dolor in per spiciamt vsun.
                                </p>
                                <p className='r_lorem'>
                                    aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nem odit aut fugit, sed quia consequ un turmagnido lors.
                                </p>
                            </div>
                        </Col>
                        <Col lg={12} xl={4}>
                            <div className='glass_img'>
                                <img src={require('../image/glass.jpeg')} className='img'></img>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                        <p className='read_more m-3'>READ MORE</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Resturant;