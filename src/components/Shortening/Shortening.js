import React, { useState } from "react";
import ShorteningLoading from "../ShorteningLoading/ShorteningLoading";
import ShorteningResult from "../ShorteningResult/ShorteningResult";
import styles from "./Shortening.module.css";
import axios from "axios";
import classNames from "classnames";

const Shortening = () => {
	const [loading, setLoading] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [inputPlaceholder, setInputPlaceholder] = useState(
		"Shorten a link here..."
	);
	const [shortenLink, setShortenLink] = useState(null);
	const [links, setLinks] = useState([]);
	const [error, setError] = useState(false);

	// const createResultBox = (originalLink, shortenLink) => {
	// 	return (
	// 		<ShorteningResult originalLink={originalLink} shortenLink={shortenLink} />
	// 		// <div className="result">
	// 		// 	<p className="originalLink">{originalLink}</p>
	// 		// 	<hr />
	// 		// 	<p className="shortenLink">{shortenLink}</p>
	// 		// 	<button className="copyBtn">Copy</button>
	// 		// </div>
	// 	);
	// };

	// <ShorteningResult originalLink={inputValue} shortenLink={ }/>

	//should be places inside useEffect?
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
				setShortenLink(shortenLink);

				// let arr = [];
				// let newArr = [...arr, shortenLink];
				// console.log(newArr);
				// setResultsList((resultsList) => [...resultsList, shortenLink]);
				setLinks([
					...links,
					{ originalLink: inputValue, newLink: shortenLink },
				]);
				// setResultsList([...resultsList, shortenLink]);
				// console.log(resultsList);
				console.log(links);
				// createResultBox(inputValue, shortenLink);

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
		let regex =
			/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

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
			<div>
				{loading && <ShorteningLoading />}
				{links && <ShorteningResult links={links} />}
			</div>
		</>
	);
};

export default Shortening;
