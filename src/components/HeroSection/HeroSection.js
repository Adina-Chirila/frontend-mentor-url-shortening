import React from "react";
import styles from "./HeroSection.module.css";
import heroImg from "images/illustration-working.svg";

const HeroSection = () => {
	return (
		<div className="container">
			<div className={styles.heroSection}>
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>More than just shorter links</h1>
					<p className={styles.heroText}>
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<button className={styles.getStartedBtn}>Get Started</button>
				</div>
				<div className={styles.heroImg}>
					<img src={heroImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
