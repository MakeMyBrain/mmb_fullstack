import { Nav, Navbar, Container } from "react-bootstrap";
import "./navbar.css";
import logo from "../media/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./Aboutus";
import Blog from "./Blogs";
import Faq from "./Faq";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarComp = () => {
	const navigate = useNavigate();

	const handleAuth = () => {
		if (localStorage.getItem("jwt_token")) {
			const jwtToken = localStorage.getItem("jwt_token");
			console.log(jwtToken);
			axios
				.post(`https://mmb-auth.onrender.com/users/logout`, null, {
					headers: {
						Authorization: `Bearer ${jwtToken}`,
					},
				})
				.then((res) => {
					localStorage.removeItem("email");
					localStorage.removeItem("subs");
					localStorage.removeItem("jwt_token");
					navigate("/");
				})
				.catch((error) => {
					console.log("error.message", error.message);
				});
		} else {
			navigate("/login");
		}
	};
	return (
		<div id="header">
			<Navbar expand="lg" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to={"/"} className="fs-4">
						<img
							src={logo}
							width="50"
							height="40"
							alt="logo"
							className="d-inline-block align-top"
						/>{" "}
						MakeMyBrain
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						className="justify-content-end"
						id="responsive-navbar-nav"
					>
						<Nav
							expand="lg"
							className="ma-auto gap-3  font-Segoe UI"
						>
							{/* <Nav.Link as={Link} to={"/openup"} id="talk_button">
								Get Solution
							</Nav.Link> */}
							<Nav.Link as={Link} to={"/product"}>
								Products
							</Nav.Link>
							<Nav.Link as={Link} to={"/"}>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to={"/category"}>
								Blogs
							</Nav.Link>
							{/* <a href='https://makemybrain.com/blog' id='blog_link'>Blogs</a> */}
							
							<Nav.Link as={Link} to={"/about"}>
								About Us
							</Nav.Link>
							<Nav.Link onClick={handleAuth}>
								{localStorage.getItem("jwt_token")
									? "Logout"
									: "Login"}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarComp;
