import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import Footer from '../ABOUT/Footer';
import { Link } from "react-router-dom";



function Single_shop() {
    return (
        <div>
            <div className='main_shop'>
                <Container className='border1'>
                    <div className='top_blog'>
                        <p className='Diane text_line'>GALLERY PORTFOLIO</p>
                        <div className='right_b'>
                            <p><Link to="/home">Home</Link></p>
                            <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            <p>Dadiho de Tapo</p>
                        </div>
                    </div>
                    <div className='inner_shop'>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className='shop_oimg'>
                                    <img src={require('../image/shop-img-1-600x600.jpg')} className='img'></img>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className='inner_DADIHO'>
                                    <p className='DADIHO'>DADIHO DE TAPO</p>
                                    <div className='d-flex pb-3'>
                                        <p>
                                            <i><FaStar></FaStar></i>
                                            <i><FaStar></FaStar></i>
                                            <i><FaStar></FaStar></i>
                                            <i><FaStar></FaStar></i>
                                            <i><IoIosStarOutline></IoIosStarOutline></i>
                                        </p>
                                        <p className='s_custom'>(1 customer review)</p>
                                    </div>
                                    <p className='shop_17'>£17.00</p>
                                    <p className='shop_lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsi edo eiusmod senteas tempor incididunt ut labore et dolr emagna aliqua. Ut enim ad minim dano ris veniam quis</p>
                                    <div className='d-flex mb-4'>
                                        <p className='s_1 me-4'>1</p>
                                        <p className='s_add'>ADD TO CARD</p>
                                    </div>
                                    <div className='d-flex pb-3'>
                                        <p className='s_sku'>SKU:</p>
                                        <p className='sku_price'>030</p>
                                    </div>
                                    <div className='d-flex pb-3'>
                                        <p className='s_sku'>CATEGORY:</p>
                                        <p className='sku_price'>Food</p>
                                    </div>
                                    <div className='d-flex pb-3'>
                                        <p className='s_sku'>TAGS:</p>
                                        <p className='sku_price'>Breakfast, Sea food</p>
                                    </div>
                                    <div className='d-flex pb-3'>
                                        <p className='s_sku'>SHARE:</p>
                                        <p className='shop_sku'>
                                            <i><SlSocialFacebook></SlSocialFacebook></i>
                                            <i><CiTwitter></CiTwitter></i>
                                            <i><IoLogoInstagram></IoLogoInstagram></i>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className='three_shop'>
                <Container className='border1'>
                    <div className='inner_three'>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <p className='DESCRIPTION'>DESCRIPTION</p>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <p className='DESCRIPTION'>ADDITIONAL INFORMATIO</p>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <p className='DESCRIPTION'>REVIEWS (1)</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='s_main_lorem'>
                                    <p className='s_three_lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    <p className='s_three_lorem'>dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                                    <p className='s_three_lorem'>ea commodo conseq at duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>

            <div className='s_product border2'>
                <Container className='border1'>
                    <div className='inner_pro'>
                        <p className='RELATED'>RELATED PRODUCTS</p>
                        <Row className='g-3'>
                            <Col xl={3} lg={4} md={6} sm={12} xs={12}>
                                <div className='one_pro'>
                                    <div className='punch_img'>
                                        <img src={require('../image/home-8-img-shop-6-600x600.jpg')} className='img'></img>
                                        <div className='sthree_img'>
                                            <p className='add'>ADD TO CARD</p>
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <p className='s_punch'>PUNCH</p>
                                        <p className='s_prize'>£17.00</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} xs={12}>
                                <div className='one_pro'>
                                    <div className='punch_img'>
                                        <img src={require('../image/shop-img-7-600x600.jpg')} className='img'></img>
                                        <div className='sthree_img'>
                                            <p className='add'>ADD TO CARD</p>
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <p className='s_punch'>BERRIES DAIQUIRI</p>
                                        <p className='s_prize'>£17.00</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} xs={12}>
                                <div className='one_pro'>
                                    <div className='punch_img'>
                                        <img src={require('../image/home-8-img-shop-1-600x600.jpg')} className='img'></img>
                                        <div className='sthree_img'>
                                            <p className='add'>ADD TO CARD</p>
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <p className='s_punch'>CHICKEN FILE</p>
                                        <p className='s_prize'>£17.00</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} xs={12}>
                                <div className='one_pro'>
                                    <div className='punch_img'>
                                        <img src={require('../image/shop-img-6-600x600.jpg')} className='img'></img>
                                        <div className='sthree_img'>
                                            <p className='add'>ADD TO CARD</p>
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <p className='s_punch'>SEAFOOD</p>
                                        <p className='s_prize'>£17.00</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>



        </div>
    )
}

export default Single_shop;