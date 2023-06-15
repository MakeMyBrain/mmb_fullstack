import { Container, Row, Col } from "react-bootstrap";
import {
	FaCopyright,
	FaFacebookSquare,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../media/logo.png";
// import logo from "../media/apple-touch-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="footer pt-5">
				<Container>
					<Row className="justify-content-md-center text-white">
						<Col sm={3}>
							<h5>Address</h5>
							<p id="footer_text">
								302, Second Floor, Block A, Bokaro Enclave, 
								Baghraibera, Bokaro Steel City, Jharkhand - 827013<br/>
								WhatsApp - 7979033873<br/>
								Email - binay@makemybrain.com
							</p>
						</Col>
						<Col sm={3}>
							<h5>Navigation</h5>
							<ul>
								<li>
									<Link
										to={"/mindTales"}
										className="text-white text-decoration-none"
									>
										Mind Tales
									</Link>
								</li>
								<li>
									<Link
										to={"/courses"}
										className="text-white text-decoration-none"
									>
										Mind Your Mind
									</Link>
								</li>
								<li>
									<Link
										to={"/about"}
										className="text-white text-decoration-none"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to={"/tnc"}
										className="text-white text-decoration-none"
									>
										Terms & Conditions
									</Link>
								</li>
								<li>
									<Link
										to={"/privacy"}
										className="text-white text-decoration-none"
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</Col>
						<Col sm={3}>
							<Row>
								<div className="d-flex justify-content-start">
									<img
										src={logo}
										width="70"
										height="60"
										alt=""
									/>
									<div className="ms-3">
										<h3>MakeMyBrain</h3>
										<hr />
										<h6 style={{ fontWeight: "400" }}>
											BECAUSE YOU MATTER
										</h6>
									</div>
								</div>
								<div></div>
							</Row>
							<Row>
								<h7>Connect with us</h7>
								<Col>
									<a href="https://www.facebook.com/profile.php?id=100093381436424">
										<FaFacebookSquare
											className="text-white ms-1"
											size="40"
										/>
									</a>
								</Col>
								<Col>
									<a href="https://www.instagram.com/make.my.brain/">
										<FaInstagram
											className="text-white "
											size="40"
										/>
									</a>
								</Col>
								<Col>
									<a href="https://www.linkedin.com/company/makemybrain/">
										<FaLinkedin
											className="text-white ms-1"
											size="40"
										/>
									</a>
								</Col>
								<Col>
									<a href="https://www.youtube.com/@makemybrain">
										<FaYoutube
											className="text-white ms-1"
											size="40"
										/>
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="footerbottom p-2">
				<Container>
					<p className="text-center text-white mt-3">
						Copyright <FaCopyright /> 2023, MakeMyBrain. All Rights
						Reserved.
					</p>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
