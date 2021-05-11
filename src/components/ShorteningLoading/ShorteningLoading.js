import React from "react";
import styles from "./ShorteningLoading.module.css";

const ShorteningLoading = () => {
	return (
		<>
			<div className={styles.loading}>
				<div className={styles.loadingDiv}>
					<svg className={styles.loadingCircle}>
						<circle cx="80" cy="80" r="77"></circle>
					</svg>
					<p className={styles.loadingText}>Loading...</p>
				</div>
			</div>
		</>
	);
};

export default ShorteningLoading;
