import { Nav, Navbar, Container } from 'react-bootstrap';
import './navbar.css'
import logo from '../media/logo.png'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import AboutUs from './Aboutus';
import Blog from './Blogs';
import Faq from './Faq';


const NavbarComp = () => {
    return (
        <div id='header' >
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/"} className="fs-4">
                        <img src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top" />{' '}
                        MakeMyBrain
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
                        <Nav expand="lg" className='ma-auto gap-3  font-Segoe UI'>
                            
                            <Nav.Link as={Link} to={"/"} id='talk_button'>Mind Tales</Nav.Link>
                            <a href='https://makemybrain.com/blog' id='blog_link'>Blogs</a>
                            <Nav.Link as={Link} to={"/mood"}>Velvet Vibes</Nav.Link>
                            <Nav.Link as={Link} to={"/companion"}>Let's Talk</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;