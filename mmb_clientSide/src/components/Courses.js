import Styles from "./Courses.module.css";
import React, { useState, useEffect } from "react";
import { Modules } from "./Modules";
import ReactPlayer from "react-player/youtube";
import Footer from "./Footer";

const Courses = () => {
	const [openModule, setOpenModule] = useState(null);
	const [selectedChapter, setSelectedChapter] = useState({
		heading: "Hi! You're Welcome to the course",
		videoLink: "https://www.youtube.com/embed/dWm8PXlzDpI",
		content:
			"We begin the course with an emotional hindi poem on mental health. Hope you learn a lot from this course that has been carefully created through research. Happy Learning!",
	});
	const [showSideList, setShowSideList] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title =
			"Mind Your Mind - Mental Health Wellness Course | MakeMyBrain";
	}, []);

	const handleModuleClick = (index) => {
		setOpenModule(index === openModule ? null : index);
		setSelectedChapter({
			heading: "Hi! You're Welcome to the course",
			videoLink: "https://www.youtube.com/embed/dWm8PXlzDpI",
			content:
				"We begin the course with an emotional hindi poem on mental health. Hope you learn a lot from this course that has been carefully created through research. Happy Learning!",
		});
	};

	const handleChapterClick = (chapter) => {
		setSelectedChapter(chapter);
		if (window.innerWidth <= 768) {
			setShowSideList(false);
		} else {
			setShowSideList(true);
		}
	};

	const handleArrowButtonClick = () => {
		setShowSideList(!showSideList);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth <= 768) {
				setShowSideList(false);
			} else {
				setShowSideList(true);
			}
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className={Styles["container"]}>
			<div className={Styles["heading"]}>
				<h1>MIND YOUR MIND</h1>
				<p>
					WORLD&#39;S FIRST COURSE ON
					<br />
					MENTAL HEALTH FIRST-AID
				</p>
			</div>
			<div>
				<main className={Styles["course-details"]}>
					{showSideList && (
						<nav className={Styles["course-outline"]}>
							<div className={Styles["course-outline-wrap"]}>
								<div className={Styles["intro-text"]}>
									<h2>Contents</h2>
								</div>
								{Modules.map((module, index) => (
									<div key={index} className={Styles["unit"]}>
										<div
											onClick={() =>
												handleModuleClick(index)
											}
											className={Styles["unit-title"]}
										>
											<span>{module.name}</span>
										</div>
										<ul
											className={`${
												Styles["lessons-list"]
											} ${
												openModule === index
													? Styles.open
													: ""
											}`}
										>
											{module.chapters.map(
												(chapter, chapterIndex) => (
													<li
														key={chapterIndex}
														className={
															Styles["lesson"]
														}
														onClick={() =>
															handleChapterClick(
																chapter
															)
														}
													>
														<span>
															{chapter.heading}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								))}
							</div>
						</nav>
					)}

					<div
						className={`${Styles["arrow-button"]} ${
							!showSideList ? "" : Styles["shift"]
						}`}
						onClick={handleArrowButtonClick}
					>
						<span>{showSideList ? "<" : ">"}</span>
					</div>

					<section className={Styles["course-content"]}>
						<div className={Styles["intro-text"]}>
							<h2>{selectedChapter.heading}</h2>
						</div>
						{selectedChapter && (
							<div className={Styles["video-container"]}>
								<div className={Styles["player-wrapper"]}>
									<ReactPlayer
										className={Styles["react-player"]}
										url={selectedChapter.videoLink}
										controls
										width="100%"
										height="100%"
									/>
								</div>
								<p className={Styles["chapter-descp"]}>
									{selectedChapter.content}
								</p>
							</div>
						)}
					</section>
				</main>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Courses;
