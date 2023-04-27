import "./Navbar.css";
import MenuItems from "./NavbarItems/MenuItems";
import{manuItems} from './manuItems'
import * as FaIcons from "react-icons/fa";
import {useEffect, useState} from "react";
import {authenticate} from "../Authenticate/authenticate";

const NavBar = () => {
	const [sideBar,setSideBar]= useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = authenticate.getAppUser();
		user ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	const showSideBar = () => setSideBar(!sideBar);


	return (
		<>
		<FaIcons.FaBars onClick={showSideBar}/>
			{sideBar?
				<nav className="navbar">
					<ul className="navbar">
						{manuItems.map((menu, index) => {const depthLevel = 0;
							return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;}
						)}
					</ul>
				</nav>
				: null}
		</>
	);
};

export default NavBar;
