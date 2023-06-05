import Styles from "./Courses.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Modules } from "./Modules";

const Courses = () => {
	const [openModule, setOpenModule] = useState(null);
	const [selectedChapter, setSelectedChapter] = useState({
		heading: "Hi! You're Welcome to the course",
		videoLink: "https://www.youtube.com/embed/RE87rQkXdNw",
		content: "Happy Mind, Happy Life 😇",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleModuleClick = (index) => {
		setOpenModule(index === openModule ? null : index);
		setSelectedChapter({
			heading: "Hi! You're Welcome to the course",
			videoLink: "https://www.youtube.com/embed/RE87rQkXdNw",
			content: "Happy Mind, Happy Life 😇",
		});
	};

	const handleChapterClick = (chapter) => {
		setSelectedChapter(chapter);
	};

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
					<nav className={Styles["course-outline"]}>
						<div className={Styles["course-outline-wrap"]}>
							<div className={Styles["intro-text"]}>
								<h2>Contents</h2>
							</div>
							{Modules.map((module, index) => (
								<div key={index} className={Styles["unit"]}>
									<div
										onClick={() => handleModuleClick(index)}
										className={Styles["unit-title"]}
									>
										<span>{module.name}</span>
									</div>
									<ul
										className={`${Styles["lessons-list"]} ${
											openModule === index
												? Styles.open
												: ""
										}`}
									>
										{module.chapters.map(
											(chapter, chapterIndex) => (
												<li
													key={chapterIndex}
													className={Styles["lesson"]}
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
					<section className={Styles["course-content"]}>
						<div className={Styles["intro-text"]}>
							<h2>{selectedChapter.heading}</h2>
						</div>
						{selectedChapter && (
							<div className={Styles["video-container"]}>
								<iframe
									src={selectedChapter.videoLink}
									// width="531" // 295
									// height="299" // 166
									title={selectedChapter.title}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								/>
								<p className={Styles["chapter-descp"]}>
									{selectedChapter.content}
								</p>
							</div>
						)}
					</section>
				</main>
				<div className={Styles["lower-box"]}>1</div>
			</div>
		</div>
	);
};

export default Courses;
