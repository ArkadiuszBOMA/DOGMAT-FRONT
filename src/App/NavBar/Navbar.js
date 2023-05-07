import "./Navbar.css";
import "../Utils/Buttons/ModalButton/ModalButton.css";
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
			{sideBar?
				<nav className="navbar">
					<FaIcons.FaBars color= "red" size='30px' title="Nawigacja" onClick={showSideBar}/>
					<ul>
						{manuItems.map((menu, index) => {const depthLevel = 0;
							return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;}
						)}
					</ul>
				</nav>
				:
				<nav className="navbar">
					<FaIcons.FaBars color= "red" size='30px' title="Nawigacja" onClick={showSideBar}/>
				</nav>
				}
		</>
	);
};

export default NavBar;
