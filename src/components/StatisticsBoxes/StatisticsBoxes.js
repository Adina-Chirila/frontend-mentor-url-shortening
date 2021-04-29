import React from "react";
import styles from "./StatisticsBoxes.module.css";
import recognitionImg from "../../images/icon-brand-recognition.svg";
import recordsImg from "../../images/icon-detailed-records.svg";
import customizableImg from "../../images/icon-fully-customizable.svg";
import heroImg from "../../images/illustration-working.svg";

const StatisticsBoxes = () => {
	const boxesContent = [
		{
			id: 1,
			imgSrc: "../../images/icon-brand-recognition.svg",
			title: "Brand Recognition",
			text:
				"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
		},
		{
			id: 2,
			imgSrc: "../../images/icon-detailed-records.svg",
			title: "Detailed Recordsn",
			text:
				"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
		},
		{
			id: 3,
			imgSrc: "../../images/icon-fully-customizable.svg",
			title: "Fully Customizable",
			text:
				"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
		},
	];

	return (
		<div className={styles.statisticsBoxes}>
			<div className={styles.line}></div>
			{boxesContent.map((box) => {
				return (
					<div className={styles.box} key={box.id}>
						<div className={styles.boxImg}>
							<img src={box.imgSrc} alt={box.title} />
						</div>
						<h4>{box.title}</h4>
						<p>{box.text}</p>
					</div>
				);
			})}
		</div>

		// <>
		// 	<div className={styles.box}>
		// 		<div className={styles.boxImg}>
		// 			<img src={recognitionImg} alt="" />
		// 		</div>
		// 		<h4>Brand Recognition</h4>
		// 		<p>
		// 			Boost your brand recognition with each click. Generic links don’t mean
		// 			a thing. Branded links help instil confidence in your content.
		// 		</p>
		// 	</div>
		// 	<div className={styles.box}>
		// 		<div className={styles.boxImg}>
		// 			<img src={recordsImg} alt="" />
		// 		</div>
		// 		<h4>Detailed Records</h4>
		// 		<p>
		// 			Gain insights into who is clicking your links. Knowing when and where
		// 			people engage with your content helps inform better decisions.
		// 		</p>
		// 	</div>
		// 	<div className={styles.box}>
		// 		<div className={styles.boxImg}>
		// 			<img src={customizableImg} alt="" />
		// 		</div>
		// 		<h4>Fully Customizable</h4>
		// 		<p>
		// 			Improve brand awareness and content discoverability through
		// 			customizable links, supercharging audience engagement.
		// 		</p>
		// 	</div>
		// </>
	);
};

export default StatisticsBoxes;
