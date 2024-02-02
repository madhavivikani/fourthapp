import React from 'react'
import { Container } from 'react-bootstrap';
import { FaAnglesRight } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaAnglesLeft } from "react-icons/fa6";
import Footer from '../ABOUT/Footer';
import { Link } from "react-router-dom";


function Blog_no_side() {
    return (
        <div>

            <div className='main_blog'>
                <Container className='border1'>
                    <div className='top_blog'>
                        <p className='Diane text_line'>BLOG NO SIDEBAR</p>
                        <div className='right_b'>
                            <p><Link to="/home">Home</Link></p>
                            <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            <p>Blog No Sidebar</p>
                        </div>
                    </div>
                    <div className='inner_blog'>
                        <div className='dada_img'>
                            <img src={require('../image/dada.jpg')} className='img'></img>
                        </div>
                        <div className='main_one'>
                            <div className='one_b'>
                                <p className='Diane'>Diane Johnson</p>
                                <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            </div>
                            <div className='one_b'>
                                <p className='Diane'>October 5, 2019</p>
                                <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            </div>
                            <div className='one_b'>
                                <p className='Diane'>World restaurants</p>
                            </div>
                        </div>
                        <p className='ELEGANT'>ELEGANT FOOD</p>
                        <p className='b_lorem'>Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua. Ut enim ad minim veniamquis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident, sunt in culpa...</p>
                        <div className='b_social'>
                            <p className='b_read'>READ MORE</p>
                            <p className='b_icon_3'>
                                <i><SlSocialFacebook></SlSocialFacebook></i>
                                <i><CiTwitter></CiTwitter></i>
                                <i><IoLogoInstagram></IoLogoInstagram></i>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='Ray'>
                <Container className='border1'>
                    <div className='main_b_inner'>
                        <div className='inner_ray'>
                            <div className='b_colon_img'>
                                <img src={require('../image/colon.png')}></img>
                            </div>
                            <p className='life b_life'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed tempor incididunt ut</p>
                            <p className='life b_life'>labore edol ore magna.</p>
                            <p className='justin'>Justin Ray</p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='main_blog'>
                <Container className='border1'>
                    <div className='inner_blog'>
                        <div className='food_img'>
                            <img src={require('../image/Blog-list-img-2.jpg')} className='img'></img>
                        </div>
                        <div className='main_one'>
                            <div className='one_b'>
                                <p className='Diane'>Diane Johnson</p>
                                <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            </div>
                            <div className='one_b'>
                                <p className='Diane'>October 5, 2019</p>
                                <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            </div>
                            <div className='one_b'>
                                <p className='Diane'>World restaurants</p>
                            </div>
                        </div>
                        <p className='ELEGANT'>THE ROYAL CHARM</p>
                        <p className='b_lorem'>Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua. Ut enim ad minim veniamquis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident, sunt in culpa...</p>
                        <div className='b_social'>
                            <p className='b_read'>READ MORE</p>
                            <p className='b_icon_3'>
                                <i><SlSocialFacebook></SlSocialFacebook></i>
                                <i><CiTwitter></CiTwitter></i>
                                <i><IoLogoInstagram></IoLogoInstagram></i>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='Ray'>
                <Container className='border1'>
                    <div className='main_b_inner'>
                        <div className='inner_ray'>
                            <div className='b_colon_img'>
                                <img src={require('../image/colon.png')}></img>
                            </div>
                            <p className='life b_life'>
                            Wnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                            <p className='life b_life pb-5'>aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='main_blog border2'>
                <Container className='border1'>
                    <div className='inner_blog'>
                        <div className='food_img'>
                            <img src={require('../image/image1.jpeg')} className='img'></img>
                        </div>
                        <div className='main_one'>
                            <div className='one_b'>
                                <p className='Diane'>Diane Johnson</p>
                                <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            </div>
                            <div className='one_b'>
                                <p className='Diane'>October 5, 2019</p>
                                <p className='b_icon'><FaAnglesRight></FaAnglesRight></p>
                            </div>
                            <div className='one_b'>
                                <p className='Diane'>World restaurants</p>
                            </div>
                        </div>
                        <p className='ELEGANT'>FINE DINING SPACE</p>
                        <p className='b_lorem'>Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua. Ut enim ad minim veniamquis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident, sunt in culpa...</p>
                        <div className='b_social'>
                            <p className='b_read'>READ MORE</p>
                            <p className='b_icon_3'>
                                <i><SlSocialFacebook></SlSocialFacebook></i>
                                <i><CiTwitter></CiTwitter></i>
                                <i><IoLogoInstagram></IoLogoInstagram></i>
                            </p>
                        </div>
                    </div>
                    <div className='one_two'>
                        <i><FaAnglesLeft></FaAnglesLeft></i>
                        <p className='one_page'>1</p>
                        <p className='one_page'>2</p>
                        <i><FaAnglesRight></FaAnglesRight></i>
                    </div>
                </Container>
            </div>

            
        </div>

    )
}

export default Blog_no_side;