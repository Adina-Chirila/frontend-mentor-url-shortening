import React, { useState } from "react";
import styles from "./StatisticsBoxes.module.css";
import recognitionImg from "../../images/icon-brand-recognition.svg";
import recordsImg from "../../images/icon-detailed-records.svg";
import customizableImg from "../../images/icon-fully-customizable.svg";

const StatisticsBoxes = () => {
	const [boxesContent, setBoxesContent] = useState([
		{
			id: 1,
			imgSrc: recognitionImg,
			title: "Brand Recognition",
			text:
				"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
		},
		{
			id: 2,
			imgSrc: recordsImg,
			title: "Detailed Records",
			text:
				"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
		},
		{
			id: 3,
			imgSrc: customizableImg,
			title: "Fully Customizable",
			text:
				"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
		},
	]);

	return (
		<div className={styles.statisticsBoxes}>
			<div className={styles.line}></div>
			{boxesContent.map((box) => {
				const { imgSrc, title, text, id } = box;
				return (
					<div className={styles.box} key={id}>
						<div className={styles.boxImg}>
							<img src={imgSrc} alt={title} />
						</div>
						<h4>{title}</h4>
						<p>{text}</p>
					</div>
				);
			})}
		</div>
	);
};

export default StatisticsBoxes;
