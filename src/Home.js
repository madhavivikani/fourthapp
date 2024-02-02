import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Story from "./HOME/Story";
import Testi_pic from "./HOME/Testi_pic";
import Our_best from "./HOME/Our_best";
import img1 from './image/1.svg';
import { IoPlayOutline } from "react-icons/io5";
import Header from "./ABOUT/Header";
import OwlCarousel from 'react-owl-carousel';
import Footer from "./ABOUT/Footer";



function Home() {
  return (

    <div className="main_layout">
      <Header />

      
      <div className="slider">
        <OwlCarousel className='owl-theme' loop margin={10} autoplay dots={false} items={1}>
          <div class='item'>
            <div className="item1">
              <div className="item_text">
                <p className='life'>take a sip of our innovative drinks</p>
                <div className='about_text'>
                  <div>
                    <img src={img1} className="d-sm-none d-lg-block"></img>
                  </div>
                  <div>
                    <span className='our_b fit'>THE FINEST DRINKS</span>
                  </div>
                  <div>
                    <img src={img1}  className="d-sm-none d-lg-block"></img>
                  </div>
                </div>
                <p className="from">From the delicious food to wonderful cocktails, Laurent’s offer is guaranteed to satisfy all of your taste buds.
                </p>
                <div className='btn_v'>
                  <p className='view'>VIEW ALL</p>
                </div>
              </div>
            </div>
          </div>
          <div class='item'>
            <div className="item2">
              <div className="item_text">
                <p className='life'>take a sip of our innovative drinks</p>
                <div className='about_text'>
                  <div>
                    <img src={img1}  className="d-xs-none d-lg-block"></img>
                  </div>
                  <div>
                    <span className='our_b fit'>THE FINEST DRINKS</span>
                  </div>
                  <div>
                    <img src={img1}  className="d-xs-none d-lg-block"></img>
                  </div>
                </div>
                <p className="from">From the delicious food to wonderful cocktails, Laurent’s offer is guaranteed to satisfy all of your taste buds.
                </p>
                <div className='btn_v'>
                  <p className='view'>VIEW ALL</p>
                </div>
              </div>
            </div>
          </div>
          <div class='item'>
            <div className="item3">
              <div className="item_text">
                <p className='life'>take a sip of our innovative drinks</p>
                <div className='about_text'>
                  <div>
                    <img src={img1}  className="d-sm-none d-lg-block"></img>
                  </div>
                  <div>
                    <span className='our_b fit'>THE FINEST DRINKS</span>
                  </div>
                  <div>
                    <img src={img1}  className="d-sm-none d-lg-block"></img>
                  </div>
                </div>
                <p className="from">From the delicious food to wonderful cocktails, Laurent’s offer is guaranteed to satisfy all of your taste buds.
                </p>
                <div className='btn_v'>
                  <p className='view'>VIEW ALL</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <Story />
      <Testi_pic />
      <Our_best />


      <div className="our_menu">
        <Container className="border1">
          <div className="inner_menu">
            <p className='life'>Special selection</p>
            <div className='about_text'>
              <div>
                <img src={img1}></img>
              </div>
              <div>
                <p className='t_about text-center'>FROM OUR MENU</p>
              </div>
              <div>
                <img src={img1}></img>
              </div>
            </div>
            <Row>
              <Col lg={6} sm={12}>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">BEEF BURGER MEAL	</p>
                    <p className="beef1">$32</p>
                  </div>
                  <p className="classic">Classic greek salad, barrel aged feta cheese, bread</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">ROASTED LAMB RUMP</p>
                    <p className="beef1">$25</p>
                  </div>
                  <p className="classic">Grilled lamb cutlets, pomegranate glaze, butternut squash</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">PAN SEARED SEA BASS</p>
                    <p className="beef1">$38</p>
                  </div>
                  <p className="classic">Saffron and mussel’s broth, new potatoes, edamame beans</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">ROASTED LAMB RUMP</p>
                    <p className="beef1">$38</p>
                  </div>
                  <p className="classic">Creamy saffron, sauce Vierge</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">CITRUS CURED SALMON	</p>
                    <p className="beef1">$41</p>
                  </div>
                  <p className="classic">Horseradish creme fraiche, beetroot mousse, oil</p>
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">BEEF BURGER MEAL	</p>
                    <p className="beef1">$32</p>
                  </div>
                  <p className="classic">Classic greek salad, barrel aged feta cheese, bread</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">ROASTED LAMB RUMP</p>
                    <p className="beef1">$25</p>
                  </div>
                  <p className="classic">Grilled lamb cutlets, pomegranate glaze, butternut squash</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">PAN SEARED SEA BASS</p>
                    <p className="beef1">$38</p>
                  </div>
                  <p className="classic">Saffron and mussel’s broth, new potatoes, edamame beans</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">ROASTED LAMB RUMP</p>
                    <p className="beef1">$38</p>
                  </div>
                  <p className="classic">Creamy saffron, sauce Vierge</p>
                </div>
                <div className="menu_text">
                  <div className="name_menu">
                    <p className="beef">CITRUS CURED SALMON	</p>
                    <p className="beef1">$41</p>
                  </div>
                  <p className="classic">Horseradish creme fraiche, beetroot mousse, oil</p>
                </div>
              </Col>
            </Row>
            <div className='btn_v'>
              <p className='view view_space'>VIEW ALL</p>
            </div>
          </div>
        </Container>
      </div>


      <div className="play2">
        <Container className="border1">
          <div className="inner_play">
            <div className="play_center">
              <a href="#https://vimeo.com/369245407">
                <i className="m-auto"><IoPlayOutline></IoPlayOutline></i>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="menu">
        <Container className="border1">
          <div className="inner_menu_h">
            <p className='life'>Laurent’s tasty offer</p>
            <div className='about_text'>
              <div>
                <img src={img1}></img>
              </div>
              <div>
                <span className='our_b t_about'>OUR MENU</span>
              </div>
              <div>
                <img src={img1}></img>
              </div>
            </div>
            <div className="all_three">
              <Row className="g-4">
                <Col lg={4} md={6} xs={12}>
                  <div className="first1">
                    <div className="first_img">
                      <img src={require('./image/first.jpeg')} className="img"></img>
                    </div>
                    <div className="name_f">
                      <p className="start">STARTERS</p>
                      <p className="special">Specialties</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                  <div className="first1">
                    <div className="first_img">
                      <img src={require('./image/two.jpeg')} className="img"></img>
                    </div>
                    <div className="name_f">
                      <p className="start">MAIN COURSES</p>
                      <p className="special">Specialties</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                  <div className="first1">
                    <div className="first_img">
                      <img src={require('./image/three.jpeg')} className="img"></img>
                    </div>
                    <div className="name_f">
                      <p className="start">DESSERTS</p>
                      <p className="special">Specialties</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      <div className="book">
        <Container className="border1">
          <div className="inner_book">
            <p className='life'>Reservations</p>
            <div className='about_text'>
              <div>
                <img src={img1}></img>
              </div>
              <div>
                <span className='our_b t_about text-center'>BOOK A TABLE</span>
              </div>
              <div>
                <img src={img1}></img>
              </div>
            </div>
            <Row className="g-4">
              <Col lg={3} md={6} xs={12}>
                <div className="one_text">
                  <input type="text" placeholder="1 Person"></input>
                </div>
              </Col>
              <Col lg={3} md={6} xs={12}>
                <div className="one_text">
                  <input type="date" placeholder="1 Person"></input>
                </div>
              </Col>
              <Col lg={3} md={6} xs={12}>
                <div className="one_text">
                  <input type="text" placeholder="03:00 am"></input>
                </div>
              </Col>
              <Col lg={3} md={6} xs={12}>
                <div className="book_now">
                  <p>BOOK NOW</p>
                </div>
              </Col>
              
            </Row>
          <p className="power">*Powered by OpenTable</p>
          </div>
        </Container>
      </div>

      <Footer />


    </div>

  );
}

export default Home;