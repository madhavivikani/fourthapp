import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { CiCircleChevDown } from "react-icons/ci";
import { Link } from "react-router-dom";



function Footer() {
    return (
        <div className='footer'>
            <Container className='border1'>
                <div className='inner_footer'>
                    <div className='f_img'>
                        <img src={require('../image/footer.png')}></img>
                    </div>
                    <p className='Laurent'>Laurent Restaurant & Fine dining, 71 Madison Ave <br></br>10013 New York, 914-309-7030, reservations@laurent.com<br></br>Open: 09:00 am – 01:00 pm</p>
                    <Row className='g-3'>
                        <Col md={4} sm={12} className='text-center'>
                            <p className='facebook'>Facebook</p>
                        </Col>
                        <Col md={4} sm={12} className='text-center'>
                            <p className='facebook'>Instagram</p>
                        </Col>
                        <Col md={4} sm={12} className='text-center'>
                            <p className='facebook'>Trip Advisor</p>
                        </Col>
                    </Row>
                </div>
                
            </Container>
            <div className='up'>
               <a href='Header.js'> <i className='up_icon'><CiCircleChevDown></CiCircleChevDown></i></a>
            </div>
        </div>
    );
}

export default Footer;