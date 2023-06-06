import { Blogs } from "./Blogs";
import Styles from "./MindTales.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, Link } from "react";
import { useNavigate } from "react-router-dom";

const MindTales = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Navigate to the Category page with the searchQuery as a parameter
		navigate(`/category?query=${searchQuery}`);
	};

	const handleInputChange = (e) => {
		setSearchQuery(e.target.value);
	};
	console.log(searchQuery);  // logging out the variable stored from search box

	const renderCards = () =>
		Blogs.map((card) => (
			<a href={card.bloglink} className={Styles["stories-card-box-link"]}>
				<div className={Styles["stories-card-box"]}>
					<div className={Styles["stories-card-txt"]}>
						<div className={Styles["stories-card-heading"]}>
							<h4 className={Styles["blog-title"]}>
								{card.blogtitle}
							</h4>
						</div>
						<div className={Styles["stories-card-para"]}>
							<p className={Styles["blog-meta"]}>
								{card.blogmeta}
							</p>
						</div>
					</div>
				</div>
			</a>
		));
	return (
		<div className={Styles["container"]}>
			<div className={Styles["heading"]}>
				<h1>MIND TALES</h1>
				<p>Real Life Relatable Stories</p>
			</div>
			<div class={Styles["search-form-box"]}>
				<form class={Styles["search-form"]} onSubmit={handleSubmit}>
					<input
						type="text"
						id="searchInput"
						class={Styles["search-input"]}
						placeholder="What are you facing or feeling..."
						onChange={handleInputChange}
					/>
					{/* <Link to={`/category?RecognizedText=${encodeURIComponent(searchQuery)}`}>Next</Link> */}
					<button type="submit" class={Styles["search-button"]} >

						<FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
					</button>
				</form>
			</div>
			<div className={Styles["container-grid"]}>{renderCards()}</div>
		</div>
	);
};

export default MindTales;
