import React, {useState, useEffect, useCallback} from 'react';
import './Navbar.css';
import MainColorButton from "../Buttons/MainColorButton/MainColorButton";

const SCROLL_POSITION = 50;

const NavBar = (props) => {
	const [isTop, setIsTop] = useState(true);
	const [isSignUp, setIsSignUp] = useState(false);

	const changeOnScroll = useCallback(() => {
		const scrollPosition = window.scrollY;

		if (scrollPosition > SCROLL_POSITION && isTop) {
			setIsTop(false);
		} else if (scrollPosition === 0 && !isTop) {
			setIsTop(true);
		}
	}, [isTop]);

	useEffect(() => {
		window.addEventListener("scroll", changeOnScroll);

		return () => {
			window.removeEventListener("scroll", changeOnScroll);
		};
	}, [changeOnScroll]);

	const navBarClasses = `NavBar ${isTop ? "" : "NoTop"}`;

	return (
		<div className={navBarClasses}>
			<MainColorButton className = "nav-links" onClick={() => setIsSignUp(false)} text="O nas"/>
			<MainColorButton className = "nav-links" onClick={() => setIsSignUp(false)} text="Wyloguj się"/>
		</div>

	);
};

export default NavBar;
