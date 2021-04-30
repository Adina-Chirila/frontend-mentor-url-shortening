import React from "react";
import {
	FaFacebookSquare,
	FaTwitter,
	FaPinterest,
	FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";

const Footer = () => {
	return (
		<footer>
			<div className={styles.footerContainer}>
				<div className="bottom-logo">
					<img src={logo} alt="" />
				</div>
				<nav className={styles.navbarBottom}>
					<ul>
						<li>Features</li>
						<li>
							<a href="/features">Link Shortening</a>
						</li>
						<li>
							<a href="/branded-links">Branded Links</a>
						</li>
						<li>
							<a href="/analytics">Analytics</a>
						</li>
					</ul>
					<ul>
						<li>Resources</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="/developers">Developers</a>
						</li>
						<li>
							<a href="/support">Support</a>
						</li>
					</ul>
					<ul>
						<li>Company</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/out-team">Our Team</a>
						</li>
						<li>
							<a href="/careers">Careers</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</nav>

				<div className={styles.socialMedia}>
					<FaFacebookSquare className={styles.socialMediaIcon} />
					<FaTwitter className={styles.socialMediaIcon} />
					<FaPinterest className={styles.socialMediaIcon} />
					<FaInstagram className={styles.socialMediaIcon} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
