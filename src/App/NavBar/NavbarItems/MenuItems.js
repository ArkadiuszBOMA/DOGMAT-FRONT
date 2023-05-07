import "../Navbar.css"
import Dropdown from "./Dropdown";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";


const MenuItems = ({ items, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);

	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);
	const onMouseEnter = () => {
		window.innerWidth > 960 && setDropdown(true);
	};

	const onMouseLeave = () => {
		window.innerWidth > 960 && setDropdown(false);
	};

	const closeDropdown = () => {
		dropdown && setDropdown(false);
	};


	return (

		<li className='navbar-dark' ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={closeDropdown}
		>
			{items.submenu ? (
				<>
					<button
						aria-expanded={dropdown ? "true" : "false"}
						onClick={() => setDropdown((prev) => !prev)}
					>
						{items.title}{" "}
						{depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"
						></span>}
					</button>
					<Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}
					/>
				</>
			) : (
				<Link to={items.url} className={items.cName}>{items.title}</Link>
			)}
		</li>
	);
};
export default MenuItems;