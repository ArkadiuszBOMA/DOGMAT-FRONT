import "./Navbar.css"
import MenuItems from "./NavbarItems/MenuItems";
import{manuItems} from './manuItems'
const NavBar = () => {
	return (
		<nav>
			<ul className="navbar">
				{manuItems.map((menu, index) => {
						const depthLevel = 0;
						return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
				}
				)}
			</ul>
		</nav>
	);
};


export default NavBar;
