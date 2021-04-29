import React from "react";

const ShorteningLoading = () => {
	return (
		<div className="shortenResults">
			<div className="loading">
				<div className="loadingDiv">
					<svg className="loadingCircle">
						<circle cx="80" cy="80" r="77"></circle>
					</svg>
					<p className="loadingText">Loading...</p>
				</div>
			</div>
		</div>
	);
};

export default ShorteningLoading;
