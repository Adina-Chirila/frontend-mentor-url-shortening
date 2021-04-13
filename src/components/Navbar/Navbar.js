import React from "react";
import logo from "../../images/logo.svg";
import "../../App.css";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className="container">
			<header>
				<img src={logo} alt="logo" className={styles.logo} />
				<div className={styles.navbarContainer}>
					<nav className={styles.navbar}>
						<ul>
							<li>
								<a href="/features">Features</a>
							</li>
							<li>
								<a href="/pricing">Pricing</a>
							</li>
							<li>
								<a href="/resources">Resources</a>
							</li>
						</ul>
					</nav>
					<div className={styles.btnContainer}>
						<button className={styles.login}>Login</button>
						<button className={styles.signUpBtn}>Sign up</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
