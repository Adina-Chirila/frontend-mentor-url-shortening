import styles from "./ShorteningResult.module.css";
import classNames from "classnames";

const ShorteningResult = ({ links }) => {
	const [copied, setCopied] = "";

	const copyOnClipboard = () => {
		navigator.clipboard.writeText(copied);
	};

	// const copyBtnClasses = classNames(styles.copyBtn, copied && styles.copied);
	return (
		<>
			{links
				? links.map((link, index) => (
						<div key={index} className={styles.result}>
							<p className={styles.originalLink}>{link.originalLink}</p>
							<hr />
							<p className={styles.newLink}>{link.newLink}</p>
							{/* <button className={copyBtnClasses}>Copy</button> */}
							<button
								className={styles.copyBtn}
								onClick={() => console.log("copied")}
							>
								Copy
							</button>
						</div>
				  ))
				: null}
		</>

		// <div className="result">
		// 	<p className="originalLink">{originalLink}</p>
		// 	<hr />
		// 	<p className="shortenLink">{shortenLink}</p>
		// 	<button className="copyBtn">Copy</button>
		// </div>
	);
};

export default ShorteningResult;
