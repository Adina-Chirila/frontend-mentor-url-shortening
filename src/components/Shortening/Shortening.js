import React, { useState } from "react";
import ShorteningLoading from "../ShorteningLoading/ShorteningLoading";
import styles from "./Shortening.module.css";
import axios from "axios";
import classNames from "classnames";

const Shortening = () => {
	const [loading, setLoading] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [inputPlaceholder, setInputPlaceholder] = useState(
		"Shorten a link here..."
	);
	const [error, setError] = useState(false);

	//should be places in useEffect?
	const getData = (originalLink) => {
		console.log("getData runs");
		// if loading is true show loading circle
		setLoading(true);
		console.log("Loading...");
		//disable submit button while loading
		let url = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;

		//while waiting show loading circle

		axios
			.get(url)
			.then((resp) => {
				//hide loading circle
				setLoading(false);
				//enable submit button when the loading is finished
				let shortenLink = resp.data.result.full_short_link;
				//show results box
				console.log(shortenLink);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
				//enable submit button when there is an error
				console.log(err);
				//hide loading circle
				//add error class to input
			});
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

		console.log("A name was submitted: " + inputValue);

		if (!inputValue || !regex.test(inputValue)) {
			console.log("function stopped");
			setError(true);
			setInputPlaceholder("Please enter a valid link...");
			setInputValue("");

			return;
		}
		setError(false);
		getData(inputValue);
		setInputValue("");
		setInputPlaceholder("Shorten a link here...");

		getData(inputValue);
	};

	const inputClasses = classNames(styles.input, error && styles.error);

	return (
		<>
			<div className={styles.outerInput}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder={inputPlaceholder}
						className={inputClasses}
						value={inputValue}
						onChange={handleChange}
					/>
					<button className={styles.submitBtn} disabled={loading}>
						Shorten It!
					</button>
				</form>
			</div>
			{loading && <ShorteningLoading />}
			{/* {loading? <ShorteningLoading />: <ShorteningResults/>} */}
			{/* <ShorteningLoading isLoading={isLoading}/> */}
		</>
	);
};

export default Shortening;
