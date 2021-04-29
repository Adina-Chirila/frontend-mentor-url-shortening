import React from "react";
import ShorteningLoading from "../ShorteningLoading/ShorteningLoading";
import styles from "./Shortening.module.css";

const Shortening = () => {
	return (
		<>
			<div className={styles.outerInput}>
				<form action="">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className={styles.input}
					/>
					<button className={styles.submitBtn}>Shorten It!</button>
				</form>
			</div>
			{/* <ShorteningLoading /> */}
		</>
	);
};

export default Shortening;
