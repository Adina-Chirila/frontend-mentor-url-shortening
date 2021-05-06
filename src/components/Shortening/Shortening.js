import React, { useState, useEffect } from "react";
import ShorteningLoading from "../ShorteningLoading/ShorteningLoading";
import styles from "./Shortening.module.css";

const Shortening = () => {
	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(true);
	const [inputValue, setInputValue] = useState("");

	// const fetchLink = async () => {

	// }

	// https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=477s
	// 1:57:00

	useEffect(() => {
		console.log("use effect runs");
	}, []);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("A name was submitted: " + inputValue);
	};

	return (
		<>
			<div className={styles.outerInput}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Shorten a link here..."
						className={styles.input}
						value={inputValue}
						onChange={handleChange}
					/>
					<button className={styles.submitBtn}>Shorten It!</button>
				</form>
			</div>
			{/* <ShorteningLoading isLoading={isLoading}/> */}
		</>
	);
};

export default Shortening;
