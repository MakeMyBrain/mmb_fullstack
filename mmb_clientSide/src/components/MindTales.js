import { Blogs } from "./Blogs";
import Styles from "./MindTales.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MindTales = () => {
	const renderCards = () =>
		Blogs.map((card) => (
			<div className={Styles["stories-card-box"]}>
				<div className={Styles["stories-card-txt"]}>
					<div className={Styles["stories-card-heading"]}>
						<h4 className={Styles["blog-title"]}>
							{card.blogtitle}
						</h4>
					</div>
					<div className={Styles["stories-card-para"]}>
						<p className={Styles["blog-meta"]}>{card.blogmeta}</p>
					</div>
				</div>
			</div>
		));
	return (
		<div className={Styles["container"]}>
			<div className={Styles["heading"]}>
				<h1>MIND TALES</h1>
				<p>Real Life Relatable Stories</p>
			</div>
			<div class={Styles["search-form-box"]}>
				<form class={Styles["search-form"]}>
					<input
						type="text"
						id="searchInput"
						class={Styles["search-input"]}
						placeholder="What are you facing or feeling..."
					/>
					<button type="submit" class={Styles["search-button"]}>
						<FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
					</button>
				</form>
			</div>
			<div className={Styles["container-grid"]}>{renderCards()}</div>
		</div>
	);
};

export default MindTales;
