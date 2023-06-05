// import "./Home3.css";
import Styles from "./Home3.module.css";
// import open_up from "../media/open_up-removebg-preview.png";
// import { Container, Row, Col, ModalTitle } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
// import { GiShieldEchoes, GiDragonBalls } from "react-icons/gi";
// import { SiDiscourse } from "react-icons/si";
import { Link, Navigate } from "react-router-dom";
// import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useLayoutEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import partner1 from "../media/avalipt.png";
import partner2 from "../media/jumbo.png";
import boxer from "../media/boxer.png";
import thinkingGirl from "../media/thinking-girl.png";
import img1 from "../media/carouselCourses/img1.png";
import img2 from "../media/carouselCourses/img2.png";
import img3 from "../media/carouselCourses/img3.png";
import img4 from "../media/carouselCourses/img4.png";
import img5 from "../media/carouselCourses/img5.png";
// import musicboy from "../media/musicboy.png";
// import companiontalk from "../media/companiontalk.png";
// import therapist from "../media/therapist.png";
// import mindtales from "../media/mindtales.png";
// import job from "../media/job.png";
import { Users } from "./Users";
// import { Cards } from "./Cards";

const coursesCarousel = [
	{
		img: img1,
		text: "What to do in panic attack when...",
	},
	{
		img: img2,
		text: "Top 5 Yoga poses to increase...",
	},
	{
		img: img3,
		text: "When your parents refuse to...",
	},
	{
		img: img4,
		text: "How to draw a line between...",
	},
	{
		img: img5,
		text: "3 Must-do things for work-life...",
	},
];
// &#58;
const storiesCarousel = [
	{
		heading:
			"I felt like a failure: My struggle with postpartum depression",
		text: "Becoming a mother was the most fulfilling experience of my life. Holding my little bundle of joy in my arms brought tears to my eyes. At that moment, all I can say is I felt...",
	},
	{
		heading: "The fear of starting over: My experience with divorce",
		text: "When I got married, I thought it would last forever. My husband and I were in love, and we had big dreams for our future together. However over time...",
	},
	{
		heading: "Breaking up and Moving on: My journey through heartbreak",
		text: "Breaking up is never easy. It's a painful process that can leave you feeling lost, alone, and heartbroken. This is the story of my journey through heartbreak...",
	},
	{
		heading:
			"365 Days, 1 Apartment, 0 Regrets - How living alone changed my life",
		text: "As a 25 years olf fresh graduate, I found myself submerged in loneliness in a new city with a new job and no family or friends to rely on. Initially I was...",
	},
	{
		heading:
			"My tips for achieving work-life balance in a busy corporate job",
		text: "The first thing you need to understand is that corporate life is like a giant monster that can eat up all your time and energy. If you are not careful, you can...",
	},
];

const Home3 = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	// const [query, setQuery] = useState("");
	// console.log(Users.filter((user) => user.name.toLowerCase().includes("bi")));
	//--------- Carousel Settings-------------//
	const settings = {
		centerMode: true,
		centerPadding: "8px",
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		responsive: [
			{
				breakpoint: 1048,
				settings: {
					arrows: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 748,
				settings: {
					arrows: true,
					slidesToShow: 1,
				},
			},
		],
	};
	//--------- Carousel for Courses-------------//
	const renderSlidesCourses = () =>
		coursesCarousel.map((card) => (
			<div className={Styles["carousel-card-box"]}>
				<div className={Styles["carousel-card-img"]}>
					<img src={card.img} alt="course-img" />
				</div>
				<div className={Styles["carousel-card-txt"]}>{card.text}</div>
			</div>
		));
	// //--------- Carousel for Stories-------------//
	const renderSlidesStories = () =>
		storiesCarousel.map((card) => (
			<div className={Styles["stories-card-box"]}>
				<div className={Styles["stories-card-txt"]}>
					<div className={Styles["stories-card-heading"]}>
						<h4>{card.heading}</h4>
					</div>
					<div className={Styles["stories-card-para"]}>
						<p>{card.text}</p>
					</div>
				</div>
			</div>
		));
	return (
		<div>
			<section>
				<div className={Styles["banner"]}>
					<div className={Styles["text-box"]}>
						<h1 className={Styles["heading-primary"]}>
							<span className={Styles["heading-primary-main"]}>
								ASCEND
							</span>
							<br />
							<span className={Styles["heading-primary-sub"]}>
								YOUR STRESS RELIEF KIT
							</span>
						</h1>
					</div>
					<div className={Styles["banner-links"]}>
						<a href="/">Learn More &#62;</a>
						<a href="/">Buy Now &#62;</a>
					</div>
					<div className={Styles["product-box"]}>Product</div>
				</div>
			</section>
			{/* <span class="heading-primary-sub ">
							Your One-Stop solution for
						</span>
						<span className="typewrite heading-primary-main">
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
									delay: 40,
									strings: [
										"Stress",
										"Relationships",
										"Corporate life",
										"Mental Health",
									],
								}}
							/>
						</span>
						<br />
						<Link to="/openup" className="card-button">
							Start Now
						</Link> */}
			<section>
				<div className={Styles["clients-partners"]}>
					<div className={Styles["clients-partners-text"]}>
						<span>CLIENTS & PARTNERS</span>
					</div>
					<div className={Styles["partners-logo"]}>
						<img
							src={partner1}
							alt="Partners logo"
							className={Styles["partnerLogo"]}
						/>
						<img
							src={partner2}
							alt="Partners logo"
							className={Styles["partnerLogo"]}
						/>
					</div>
				</div>
			</section>
			<section>
				<div className={Styles["courses"]}>
					<div className={Styles["courses-text"]}>
						<span>MIND YOUR MIND</span>
						<h2>
							World&#39;s First Course on
							<br />
							Mental Health First-Aid
						</h2>
					</div>
					<div className={Styles["courses-btn"]}>
						<Link
							to="/courses"
							className={Styles["courses-button"]}
						>
							Explore Courses
						</Link>
					</div>
					<br />
					<div className={Styles["courses-carousel"]}>
						<Slider {...settings}>{renderSlidesCourses()}</Slider>
					</div>
				</div>
			</section>
			<section>
				<div className={Styles["stories"]}>
					<div className={Styles["stories-heading"]}>
						<span>MIND TALES</span>
						<h2>Real Life Relatable Stories</h2>
					</div>
					<div className={Styles["stories-btn"]}>
						<Link
							to="/mindTales"
							className={Styles["stories-button"]}
						>
							Start Search
						</Link>
					</div>
					<div className={Styles["stories-carousel"]}>
						<Slider {...settings}>{renderSlidesStories()}</Slider>
					</div>
				</div>
			</section>
			{/* <div>
				<div>
					<div data-aos="fade-up">
						<h2 className="text-center-title">
							What our Customers say
						</h2>
					</div>

					<div className="test_flexbox" data-aos="fade-up">
						<div className="test_flexitem">
							<div className="test_para">
								I felt a lot of relief after the talk. I would
								recommend it to people who can not afford costly
								therapies.
							</div>
							<div className="test_name">Shruti Khokhar</div>
						</div>
						<div className="test_flexitem" data-aos="fade-up">
							<div className="test_para">
								It was a very interactive session with my
								companion, and I could say things I hesitated to
								talk about.
							</div>
							<div className="test_name">Radhika Jangra</div>
						</div>
						<div className="test_flexitem" data-aos="fade-up">
							<div className="test_para">
								My companion listened to my whole story without
								judging, and I got a new perspective.
							</div>
							<div className="test_name">Pooja Bhatt</div>
						</div>
						<div className="test_flexitem" data-aos="fade-up">
							<div className="test_para">
								I am not willing to go to a therapist for every
								small issue, but here I can take talks due to
								low prices.
							</div>
							<div className="test_name">Priya Saha</div>
						</div>
					</div>
				</div>

				<br />
				<br />

				<div data-aos="fade-up">
					<h2 className="text-center-title">
						How can opening up be helpful to you?
					</h2>
				</div>
				<br />
				<br />
				<Container>
					<Row className="d-flex flex-wrap">
						<Col className="text-center" sm data-aos="fade-up">
							<img
								src={open_up}
								alt=""
								className="open_up shadow-4"
							/>
						</Col>
						<Col sm className="fs-3">
							<div data-aos="fade-up">
								<TbNumber1 className="ms-1 " size="60" />
								Stress relief
							</div>
							<div data-aos="fade-up">
								<TbNumber2 className="ms-1" size="60" />A
								different perspective
							</div>
							<div data-aos="fade-up">
								<TbNumber3 className="ms-1 " size="60" />
								Clarity in mind
							</div>
						</Col>
					</Row>
					<br />
					<br />
					<br />
					<div data-aos="fade-up">
						<h2 className="text-center-title">What do we Offer</h2>
					</div>
					<div id="flexbox">
						<div className="flex-list" data-aos="fade-up">
							<div>
								<img
									src={mindtales}
									alt="Music"
									className="offer_img"
								/>
							</div>
							<div className="offer_title">Mind Tales</div>
							<div className="offer_body">
								Express your emotions through text or voice in
								your own language to feel better, and let our AI
								algorithm recommend you stories of people you
								faced similar problems.
							</div>
							<Link to="/openup" className="offer_link">
								Explore
							</Link>
						</div>
						<div className="flex-list" data-aos="fade-up">
							<div>
								<img
									src={therapist}
									alt="Music"
									className="offer_img"
								/>
							</div>
							<div className="offer_title">Therapy Talks</div>
							<div className="offer_body">
								Talk to an expert therapist about your problems
								and make a step towards quick healing. Our
								therapists are highly qualified to handle your
								situation with care.
							</div>
							<Link to="/therapist" className="offer_link">
								Explore
							</Link>
						</div>
						<div className="flex-list" data-aos="fade-up">
							<div>
								<img
									src={companiontalk}
									alt="Music"
									className="offer_img"
								/>
							</div>
							<div className="offer_title">Post-Therapy</div>
							<div className="offer_body">
								Get one-week of chat and call support after your
								therapy, to keep track of your progress and to
								follow the instructions of the therapist
								properly for quick healing.
							</div>
							<Link to="/" className="offer_link">
								Explore
							</Link>
						</div>
					</div>
				</Container>
			</div> */}
			{/* <br />
			<br />
			<br />
			<br /> */}
			<section>
				<div className={Styles["quality"]} data-aos="fade-up">
					<div className={Styles["quality-card"]} data-aos="fade-up">
						<div className={Styles["quality-card-text"]}>
							<h2>What is Preventive Mental Health Care?</h2>
							<p>
								Making yourself strong enough to face difficult
								situations in life.
							</p>
						</div>
						<div className={Styles["quality-card-img"]}>
							<img
								className={Styles["quality-img"]}
								src={boxer}
								alt="lady-boxer-img"
							/>
						</div>
					</div>
					<div className={Styles["quality-card"]} data-aos="fade-up">
						{/* <h2 className="text-center-title text_white">
						What we assure
					</h2> */}
						<div className={Styles["quality-card-text"]}>
							<h2>Breaking the Stigma around Mental Health</h2>
							<p>
								A Shift from Tender Therapies to Classy
								products.
							</p>
						</div>
						<div className={Styles["quality-card-img"]}>
							<img
								className={Styles["quality-img"]}
								src={thinkingGirl}
								alt="thinking-girl-img"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <Row data-aos="fade-up">
						<Col className="text-center me-2">
							<GiShieldEchoes color="orange" size="60" />
							<h5 className="text_white">
								Your Privacy is
								<br />
								our Responsibility
							</h5>
						</Col>
						<Col className="text-center me-2">
							<GiDragonBalls color="orange" size="60" />
							<h5 className="text_white">
								Assured Quality
								<br />
								of Services
							</h5>
						</Col>
						<Col className="text-center me-2">
							<SiDiscourse color="orange" size="60" />
							<h5 className="text_white">
								Talk without
								<br />
								being Judged
							</h5>
						</Col>
					</Row> */}
			{/* <br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br /> */}
		</div>
	);
};

export default Home3;
