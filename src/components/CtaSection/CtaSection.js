import React from "react";
import styles from "./CtaSection.module.css";

const CtaSection = () => {
	return (
		<section className={styles.ctaSection}>
			<div className={styles.ctaSectionContainer}>
				<h1>Boost your links today</h1>
				<button className={styles.getStartedBtn}>Get Started</button>
			</div>
		</section>
	);
};

export default CtaSection;
