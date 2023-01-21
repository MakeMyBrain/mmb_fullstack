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
                            <span className='rounded-pill border border-2 border-white text-center '>
                                <a href="https://forms.gle/FC8aJN4P5nz7DXAM8" className='talk text-white'>Let's Talk</a>
                            </span>
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"}>Blogs</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                            <Nav.Link as={Link} to={"/faq"}>FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;