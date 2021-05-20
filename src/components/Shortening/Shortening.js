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

	//should be places inside useEffect?
	const getData = (originalLink) => {
		// if loading is true show loading circle
		setLoading(true);

		let url = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;

		axios
			.get(url)
			.then((resp) => {
				//hide loading circle
				setLoading(false);

				let shortenLink = resp.data.result.full_short_link;
				setShortenLink(shortenLink);

				//generate unique id for every link added in input
				const id = new Date().getTime().toString();

				setLinks([
					...links,
					{
						originalLink: inputValue,
						newLink: shortenLink,
						linkId: id,
					},
				]);
			})
			.catch((err) => {
				//if error hide loading circle
				setLoading(false);
				//set error to true to add error class to input and enable submit button
				setError(true);
				console.log(err);
			});
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let regex =
			/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

		if (!inputValue || !regex.test(inputValue)) {
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
						aria-required="true"
						aria-label="url"
						name="url"
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
			<div className={styles.resultsWrapper}>
				{loading && <ShorteningLoading />}
				{links && <ShorteningResult links={links} />}
			</div>
		</>
	);
};

export default Shortening;
