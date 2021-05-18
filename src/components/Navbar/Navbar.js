import { useState } from "react";
import logo from "images/logo.svg";
import styles from "./Navbar.module.css";
import classNames from "classnames";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const menuBtnClasses = classNames(styles.menuBtn, showMenu && styles.open);
	const mobileMenuClasses = classNames(
		styles.navbarContainer,
		showMenu && styles.open
	);

	return (
		<header className={styles.fixed}>
			<div className={styles.container}>
				<img src={logo} alt="logo" className={styles.logo} />
				<div className={menuBtnClasses} onClick={() => setShowMenu(!showMenu)}>
					<div className={styles.menuBtnBurger}></div>
				</div>
				<div className={mobileMenuClasses}>
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
			</div>
		</header>
	);
};

export default Navbar;
