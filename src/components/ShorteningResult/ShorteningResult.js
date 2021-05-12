import { useState } from "react";
import styles from "./ShorteningResult.module.css";
import classNames from "classnames";

const ShorteningResult = ({ links }) => {
	const [copyLink, setCopyLink] = useState("");
	const [copied, setCopied] = useState("");

	const handleCopyLink = (linkToCopy, linkId) => {
		setCopyLink(linkToCopy);
		navigator.clipboard.writeText(linkToCopy);
		setCopied(linkId);
		console.log(linkToCopy);
	};

	return (
		<>
			{links
				? links.map((link) => (
						<div key={link.linkId} className={styles.result}>
							<p className={styles.originalLink}>{link.originalLink}</p>
							<hr />
							<p className={styles.newLink}>{link.newLink}</p>

							<button
								className={classNames(
									styles.copyBtn,
									copied === link.linkId ? styles.copied : null
								)}
								onClick={() => {
									handleCopyLink(link.newLink, link.linkId);
								}}
							>
								{copied === link.linkId ? "Copied" : "Copy"}
							</button>
						</div>
				  ))
				: null}
		</>
	);
};

export default ShorteningResult;
