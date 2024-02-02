import { Link } from "react-router-dom";
import '../App.css';
import { SiAntdesign } from "react-icons/si";



import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {

    return (
        <>
            <header>
                <div className="main_header">
                    <Navbar expand="lg" className="bg_header">
                        <Container fluid>
                            <Navbar.Brand href="#home"><img src={require('../image/logo.png')} className='me-auto ps-3'></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto">
                                    <NavDropdown title="HOME" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link to="/home">Main Home</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Bar Home</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Restaurant Home</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Fine Dining</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Split Scree Showcase</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Haute Cuisine</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Restaurant Menu</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Fullscreen Showcase</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Carousel Showcase</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1" className='last_h'>Landing</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="PAGES" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link to="/about">About Us</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Meet The Chef</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Our Chefs</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Our Menu</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Our Kitchen</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Gallery Page</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Booking Page</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1" className='last_h'>Coming Soon</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link to="/portfolio">Gallery Portfolio</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Portfolio Types</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Portfolio Layout</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1" className='last_h'>Portfolio Single</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="BLOG" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link to="/blog">Blog No Sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Blog Standard</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Blog Left Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Blog Classic</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1" className='last_h'>Post Types</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="SHOP" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link to="/shop">Product Single</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Product List</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Shop Layout</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1" className='last_h'>Shop Pages</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Brand href="#home" className="d-sm-none d-lg-block">
                                <>
                                    <i className="icon_head pe-2"><SiAntdesign></SiAntdesign></i>
                                </>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
            </header>
        </>
    );
}

export default Header;