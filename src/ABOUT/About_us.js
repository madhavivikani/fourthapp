// import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import '../App.css';
import img1 from '../image/1.svg';
// import { Container , Nav , Navbar , NavDropdown } from 'react-bootstrap';

function About_us() {
    return (
        <div className='main_about_us'>
            <Container className='border1'>
                <div className='about_img'>
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
            </Container>
        </div>
    );
}

export default About_us;